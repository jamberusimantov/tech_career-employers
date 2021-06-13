const dotenv = require('dotenv');
dotenv.config();

const nodemailer = require('nodemailer');
const mailValidation = require('./email_validation')

const createMail = (recipientAddress, link) => {
    if (!recipientAddress) return ('missing recipient address on createMail')
    if (!link) return ('missing link on createMail')

    const to = recipientAddress;
    const subject = 'Register user to Tech Career job portal ✔';
    const text = `Please follow link to finish registration: ${link}`;
    const html = `<!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        <style amp4email-boilerplate>
            body {
                visibility: hidden
            }
        </style>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
    </head>
    <body>
        <p>Image:
            <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16" />⚡
        </p>
        <p>
            <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350" />
        </p>
        <p>
        <a href=${link}><b>Please click the link to finish registration</b></a>        
        </p>
    </body>
    </html>`;

    return ({ from: '"⚡ Tech Career ⚡" DoNotReply@Tech-Career.com', to, subject, text, html })
}

module.exports = async(recipientAddress, link) => {
    const email = createMail(recipientAddress, link)
    if (typeof email === 'string') throw new Error(email);

    const { errors, isValid } = mailValidation(email)
    if (!isValid) throw errors;
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            },
            tls: {rejectUnauthorized: false}
        });
        return await transporter.sendMail(email);
    } catch (error) { return { success: false, error } } finally {}
}