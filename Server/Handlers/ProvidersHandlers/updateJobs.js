const addJob = require('./../../Controllers/ProvidersControllers/addJob')
const mailSender = require('../../Utils/nodemailer')

const updateJobs = async (req, res) => {
    const { id } = req.params
    try {
        const providerToAdd = await addJob(req.body, id)

        if (providerToAdd.message)
            throw new Error('No se pudo agregar el servicio')

        const mailOptions = {
            from: `Team Auxie ${process.env.EMAIL}`,
            to: providerToAdd.email,
            subject: 'Nueva solicitud de servicio',
            text: 'MAIL DE SOLICITUD DE SERVICIO',
        }

        await mailSender(mailOptions)

        res.status(200).json('Servicio solicitado con éxito')
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = updateJobs
