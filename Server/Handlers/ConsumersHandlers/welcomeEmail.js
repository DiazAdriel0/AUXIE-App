const transporter = require('../../Utils/nodemailer')

const welcomeEmail = async function (req, res) {
    const { email } = req.body
    try {
        await transporter.sendMail({
            from: `Team Auxie ${process.env.EMAIL}`,
            to: email,
            subject: 'Bienvenido/a',
            text: 'Bienvenido a Auxie!',
        })
        res.status(200).json({ message: 'enviado con éxito' })
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = welcomeEmail
