const addJob = require('./../../Controllers/ProvidersControllers/addJob')
const transporter = require('./../../Utils/nodemailer')

const updateJobs = async (req, res) => {
    const { id } = req.params
    try {
        const providerToAdd = await addJob(req.body, id)

        if (providerToAdd.message)
            throw new Error('No se pudo agregar el servicio')

        await transporter.sendMail({
            from: `Team Auxie ${process.env.EMAIL}`,
            to: providerToAdd.email,
            subject: `${providerToAdd.firstName} has recibido una solicitud de trabajo`,
            text: `Recibiste una solicitud para el servicio ${req.body.service}`,
        })

        res.status(200).json('Servicio solicitado con éxito')
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = updateJobs
