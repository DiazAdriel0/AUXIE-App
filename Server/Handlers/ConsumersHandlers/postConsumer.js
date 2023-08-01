const createConsumer = require('../../Controllers/ConsumersControllers/createConsumer')

const postConsumer = async (req, res) => {
    const { firstName, lastName, age, email, username, password } = req.body
    try {   

        if(!firstName || !lastName || !age || !email || !username ||!password){
            return res.status(400).json({error:'Faltan datos'})
        }
        const newConsumer = {
            firstName,
            lastName,
            age,
            email,
            username,
            usernameLower: username.toLowerCase(),
            password,
            isActive: true,
        }

        const createdConsumer = await createConsumer(newConsumer)

        if(createdConsumer=== 'emailRepetido') {
            throw new Error(`El correo ${email} ya esta registrado`)
        }
        if(createdConsumer=== 'usernameRepetido') throw new Error(`El username ${email} ya esta registrado`)

        res.status(200).json('usuario creado con exito')

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = postConsumer
