const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const accountTransport = require('./../config/account_transport.json')
const OAuth2 = google.auth.OAuth2

const mail_rover = async () => {
    try {
        let transporter
        const oAuth2Client = new OAuth2(
            accountTransport.auth.clientId,
            accountTransport.auth.clientSecret,
            'https://developers.google.com/oauthplayground'
        )
        oAuth2Client.setCredentials({
            refresh_token: accountTransport.auth.refreshToken,
            tls: {
                rejectUnauthorized: false,
            },
        })
        oAuth2Client.getAccessToken((err, token) => {
            if (err) return console.log(err)
            accountTransport.auth.accessToken = token
            transporter = nodemailer.createTransport(accountTransport)
        })
        const info = await transporter.sendMail({
            from: 'AUXIE App <auxieapp@gmail.com>',
            to: 'diazadriel0@gmail.com, baz@example.com',
            subject: 'Asunto',
            text: 'Hello world?', // plain text body
            html: '<b>Hello world?</b>', // html body
        })
        return info
    } catch (error) {
        console.log(error)
    }
    /* mail_rover()
        .then(() => res.status(200).json('Mail enviado'))
        .catch((error) => console.log(error)) */
}

module.exports = mail_rover
/* const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM',
        pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD',
    },
}) */

/* async function sendMail() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: 'bar@example.com, baz@example.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>', // html body
    })
} */

/* const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM',
        pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD',
    },
})

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: 'bar@example.com, baz@example.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>', // html body
    })

    console.log('Message sent: %s', info.messageId)
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

main().catch(console.error) */
