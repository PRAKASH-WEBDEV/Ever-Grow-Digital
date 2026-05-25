const nodemailer = require("nodemailer");

const sendContactMail = async (req, res) => {

  try {

    const { name, email, phone, service } = req.body;

    if (!name || !email || !phone || !service) {

      return res.status(400).json({

        success: false,
        message: "All fields are required",

      });

    }

    /* =========================================
       TRANSPORTER
    ========================================= */

    const transporter = nodemailer.createTransport({

      host: "smtp.gmail.com",

      port: 587,

      secure: false,

      auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASS,

      },

      tls: {

        rejectUnauthorized: false,

      },

      family: 4,

    });

    /* =========================================
       SEND MAIL
    ========================================= */

    await transporter.sendMail({

      from: `"EverGrow Digital" <${process.env.EMAIL_USER}>`,

      to: process.env.CONTACT_RECEIVER,

      subject: "New Website Lead 🚀",

      html: `

        <div style="font-family:Arial;padding:20px">

          <h2>New Lead Received 🚀</h2>

          <p><b>Name:</b> ${name}</p>

          <p><b>Email:</b> ${email}</p>

          <p><b>Phone:</b> ${phone}</p>

          <p><b>Service:</b> ${service}</p>

        </div>

      `,

    });

    return res.status(200).json({

      success: true,

      message: "Mail Sent Successfully 🚀",

    });

  } catch (error) {

    console.log("MAIL ERROR =>", error);

    return res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};

module.exports = {

  sendContactMail,

};