const addJob = require('./../../Controllers/ProvidersControllers/addJob')
const getConsumerById = require('./../../Controllers/ConsumersControllers/getConsumerById')
const mailSender = require('../../Utils/nodemailer')
const { order } = require('./../../Utils/mailTemplates')

const updateJobs = async (req, res) => {
    const { id } = req.params
    try {
        const providerToAdd = await addJob(req.body, id)

        if (providerToAdd.message)
            throw new Error('No se pudo agregar el servicio')

        const client = await getConsumerById(req.body.clientId)

        if (!client) throw new Error('Error inesperado en el servidor')

        const {
            id: idRequest,
            service: serviceName,
            price,
            jobDate,
            paymentMethod,
        } = providerToAdd.jobs[providerToAdd.jobs.length - 1]

        const clientName = `${client.firstName} ${client.lastName}`
        const auxieName = `${providerToAdd.firstName} ${providerToAdd.lastName}`
        const taxes = 0
        const total = price + taxes
        const currency = 'ARS' // Cambiar a variable y agregarlo al formulario de solicitud y al controller que agrega el job

        const HTMLContent = order(
            idRequest,
            jobDate,
            serviceName,
            auxieName,
            price,
            taxes,
            total,
            clientName,
            paymentMethod,
            currency
        )

        const mailOptions = {
            from: `Team Auxie ${process.env.EMAIL}`,
            to: providerToAdd.email,
            subject: 'Nueva solicitud de servicio',
            html: HTMLContent,
        }

        await mailSender(mailOptions)

        res.status(200).json('Servicio solicitado con éxito')
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = updateJobs
