const nodemailer = require('nodemailer');

const SendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = await nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'lazaro5@ethereal.email',
      pass: 'CerZSPw4vj3pbA3vYX',
    },
  });
  const info = await transporter.sendMail({
    from: '"Faizan Ahmad" <faizan@gmail.com>',
    to: 'hereFaizan@gmal.com',
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>',
  });

  console.log('Message sent: %s', info.messageId);
  res.json(info);
};

module.exports = SendMail;
