const createConsumer = require('../../Controllers/ConsumersControllers/createConsumer')
const bcrypt = require('bcrypt')
const mailSender = require('../../Utils/nodemailer')

const postConsumer = async (req, res) => {
    const {
        firstName,
        userUid,
        lastName,
        gender,
        age,
        email,
        username,
        password,
    } = req.body
    try {
        if (
            !firstName ||
            !lastName ||
            !gender ||
            !age ||
            !email ||
            !username ||
            !password
        ) {
            return res.status(400).json({ error: 'Faltan datos' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newConsumer = {
            firstName,
            lastName,
            gender,
            age,
            email,
            username,
            usernameLower: username.toLowerCase(),
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

        const createdConsumer = await createConsumer(newConsumer)

        if (createdConsumer === 'emailRepetido') {
            throw new Error(`El correo ${email} ya esta registrado`)
        }
        if (createdConsumer === 'usernameRepetido')
            throw new Error(`El username ${email} ya esta registrado`)

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

        const mailOptions = {
            from: `Team Auxie ${process.env.EMAIL}`,
            to: email,
            subject: `Bienvenid${pronoun} ${firstName}`,
            text: `Bienvenid${pronoun} a Auxie!`,
        }

        await mailSender(mailOptions)

        res.status(200).json('usuario creado con exito')
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: error.message })
    }
}

module.exports = postConsumer
