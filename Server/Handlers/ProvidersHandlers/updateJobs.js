const addJob = require('./../../Controllers/ProvidersControllers/addJob')

const updateJobs = async (req, res) => {
    const { id } = req.params
    try {
        const addService = await addJob(req.body, id)

        if (addService.message)
            throw new Error('No se pudo agregar el servicio')

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

        await transporter.sendMail({
            from: `Team Auxie ${process.env.EMAIL}`,
            to: email,
            subject: `Bienvenid${pronoun} ${firstName}`,
            text: `Bienvenid${pronoun} a Auxie!`,
        })

        res.status(200).json('Servicio solicitado con éxito')
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = updateJobs
