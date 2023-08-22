const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const { CLIENT_ID, CLIENT_SECRET, EMAIL, REFRESH_TOKEN } = process.env
const OAuth2 = google.auth.OAuth2

const mailSender = async (mailOptions) => {
    try {
        const oAuth2Client = new OAuth2(
            CLIENT_ID,
            CLIENT_SECRET,
            'https://developers.google.com/oauthplayground'
        )
        oAuth2Client.setCredentials({
            refresh_token: REFRESH_TOKEN,
            tls: {
                rejectUnauthorized: false,
            },
        })

        const accessToken = await oAuth2Client.getAccessToken()

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: EMAIL,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            },
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            tls: { rejectUnauthorized: false },
        })

        const result = await transporter.sendMail(mailOptions)

        return result
    } catch (error) {
        console.error(error)
    }
}

module.exports = mailSender
