const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');

// setting port
app.set('port', 3000);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// midlewares
app.use(express.json());

// routes
app.use(require('./routes/'));

//nodemailer
app.post('/', (req, res) => {
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'grupofoga@gmail.com',
            pass: 'rdvhimumnmjyhptc'
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: 'gerencia@inversionesfoga.com',
        subject: `Mensaje de: ${req.body.name} Email: ${req.body.email} Asunto: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    })
})

//static files
app.use(express.static(path.join(__dirname, 'public')))

// listening the server
app.listen(process.env.PORT || 3000);