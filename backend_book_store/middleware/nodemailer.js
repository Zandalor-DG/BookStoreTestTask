const models = require('../database/models');
const nodemailer = require('nodemailer');

const mailerSMTP = async (req, res) => {
  try {
    const { transaction, totalAllPrice } = req.transaction;
    const { userId } = req.decoded;
    const text = `your purchase ${transaction.dataValues}`;

    const user = await models.User.findOne({ where: { id: userId } });

    // Generate SMTP service account from ethereal.email
    nodemailer.createTestAccount((err) => {
      if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
      }
      let accountSMTP = {
        email: 'Chamar007@yandex.ru',
        password: 'Zandalor123654789',
      };

      console.log('Credentials obtained, sending message...');

      // Create a SMTP transporter object
      // let transporter = nodemailer.createTransport({
      //   host: 'smtp.yandex.ru',
      //   port: 465,
      //   secure: true, // true for 465, false for other ports
      //   auth: {
      //     user: accountSMTP.email, // generated ethereal user
      //     pass: accountSMTP.password, // generated ethereal password
      //   },
      // });

      var transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: '57fd8edd566941',
          pass: 'cdfb2f0ab0d635',
        },
      });

      // Message object
      let message = {
        from: 'chamar007@yandex.ru', //'Sender Name <sender@example.com>',
        to: 'Chamar000009@gmail.com', //'Recipient <user.email>',
        subject: 'Nodemailer is unicode friendly ✔',
        text: text, //'Hello to myself!',
        //html: '<p><b>Hello</b> to myself!</p>',
      };

      transporter.sendMail(message, (err, info) => {
        if (err) {
          console.log('Error occurred. ' + err.message);
          return process.exit(1);
        }

        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        return res.status(200).json({ error: false, message: 'Send email.' });
      });
    });
  } catch (err) {
    return res.status(400).json({ error: true, message: err.message });
  }
};

module.exports = mailerSMTP;
