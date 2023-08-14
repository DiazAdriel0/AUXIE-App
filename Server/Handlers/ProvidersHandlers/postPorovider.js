const createProvider = require('../../Controllers/ProvidersControllers/createProvider')
const bcrypt = require('bcrypt')
const mailSender = require('../../Utils/nodemailer')
const { welcome } = require('./../../Utils/mailTemplates')

const postProvider = async (req, res) => {
    try {
        const {
            firstName,
            userUid,
            lastName,
            age,
            email,
            username,
            password,
            gender,
        } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        const newProvider = {
            firstName,
            lastName,
            age,
            email: email?.toLowerCase(),
            username,
            gender,
            usernameLower: username?.toLowerCase(),
            password: hashedPassword,
            image: {
                public_id:
                    'AUXIE App/Profile photos/Providers/mbvrsqvhpkjdffahemw1',
                secure_url:
                    'https://res.cloudinary.com/dvj387b1u/image/upload/v1691558271/AUXIE%20App/Profile%20photos/Providers/mbvrsqvhpkjdffahemw1.png',
            },
            isActive: true,
            userUid,
        }

        const createdProvider = await createProvider(newProvider)

        if (createdProvider.message === 'usuario repetido')
            throw new Error(
                `El nombre de usuario ${newProvider.username} ya existe`
            )
        if (createdProvider.message === 'email repetido')
            throw new Error(`El email ${newProvider.email} ya está registrado`)

        let pronoun

        // prettier-ignore
        switch (gender) {
        case 'Masculino':
            pronoun = 'o'
            break
        case 'Femenino':
            pronoun = 'a'
            break
        case 'Otro':
            pronoun = 'e'
            break
        default:
            pronoun = 'x'
            break
        }

        const HTMLContent = welcome()

        const mailOptions = {
            from: `Team Auxie ${process.env.EMAIL}`,
            to: email,
            subject: `Bienvenid${pronoun} ${firstName}`,
            html: HTMLContent,
        }

        await mailSender(mailOptions)

        res.status(200).json(createdProvider)
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: error.message })
    }
}

module.exports = postProvider
