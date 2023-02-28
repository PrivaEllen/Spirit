const nodeMailer = require('nodemailer')
class mailService{
    constructor(){
        this.transporter = nodeMailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_TOKEN
            }
        })
    }
    async sendActivationMail(to, link){
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: "Активация вашего аккаунта на сайте  " + process.env.BACKEND_URL,
            text: '',
            html:
                `
                <div>
                    <h2>Для активации вашего аккаунта перейдите по ссылке:</h2>
                    <a href="${link}">${link}</a>
                </div>
                `
        })
    }
}

module.exports = new mailService()