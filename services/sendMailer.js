const mailer = require("nodemailer");

// transport mail
const send_mail = async (email, subject, content) => {
  // transporter
  let transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: "tsatish086@gmail.com",
      pass: "Satish123@",
    },
  });

  // mail details
  let mailOptions = {
    from: "tsatish086@gmail.com",
    to: email,
    subject: subject,
    text: content,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error in sending mail : ", error);
    } else {
      console.log("Email successfully sent : ", info.response);
    }
  });
};

module.exports = send_mail;
