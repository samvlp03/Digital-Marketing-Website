var menuBtn = document.querySelector('.menu-btn');
var navLinkWrapper = document.querySelector('.nav-links');
var navLink = document.querySelectorAll('.nav-links li a');
var contactForm = document.getElementById('contact-form')

menuBtn.addEventListener('click',toggleMenu);
//Function to toggle menu button
function toggleMenu(){
    menuBtn.classList.toggle('active');
    navLinkWrapper.classList.toggle('active');
}

for (var i = 0; i < navLink.length; i++){
    navLink[i].addEventListener('click', toggleMenu)
}

contactForm.addEventListener('submit', function(event) {
    alert('Thank you for your message. We will get back to you shortly. Have a nice day!!');
});

const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/send-application', upload.single('cv'), (req, res) => {
    const { fullName, email, number, gender, internship} = req.body;
    const cv = req.file;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // replace with your email
            pass: 'your-email-password'   // replace with your email password
        }
    });

    const mailOptions = {
        from: email,
        to: 'skaivomhelp@gmail.com',
        subject: `New Internship Application from ${fullName}`,
        text: `Name: ${fullName}\nEmail: ${email}\nPhone Number: ${number}\nGender: ${gender}\nInternship: ${internship}`,
        attachments: [
            {
                filename: cv.originalname,
                path: cv.path
            }
        ]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Failed to send application. Please try again.');
        }
        res.send('Your application has been sent successfully!');
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});


const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    window.location.href = 'about.html';
});


app.post('/send-application', (req, res) => {
    const { fullName, email, number, gender, course} = req.body;


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // replace with your email
            pass: 'your-email-password'   // replace with your email password
        }
    });

    const mailOptions = {
        from: email,
        to: 'skaivomhelp@gmail.com',
        subject: `New Course Application from ${fullName}`,
        text: `Name: ${fullName}\nEmail: ${email}\nPhone Number: ${number}\nGender: ${gender}\nCourse: ${course}`,
        
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Failed to send application. Please try again.');
        }
        res.send('Your application has been sent successfully!');
    });
});