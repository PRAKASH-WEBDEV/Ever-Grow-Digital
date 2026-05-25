const nodemailer = require("nodemailer");

/* =========================================
   REQUIRED FIELDS
========================================= */

const requiredFields = ["name", "email", "phone", "service"];

/* =========================================
   HTML ESCAPE (XSS prevention)
========================================= */

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

/* =========================================
   TRANSPORTER
========================================= */

const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Email credentials are missing");
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com", // service: "gmail" hata do
    port: 587, // 465 ki jagah 587
    secure: false, // 465 = true, 587 = false
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    tls: {
      rejectUnauthorized: false, // Render SSL issues fix
    },
  });
};

/* =========================================
   EMAIL TEMPLATE — ADMIN (Lead Received)
========================================= */

const adminEmailTemplate = ({ name, email, phone, service }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Lead — GrowthGarage</title>
</head>
<body style="margin:0;padding:0;background:#F0FDF9;font-family:'Segoe UI',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 8px 40px rgba(0,194,168,0.12);">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#00C2A8 0%,#00967E 100%);padding:40px 48px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:800;letter-spacing:-0.5px;">
                GrowthGarage
              </h1>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px;letter-spacing:2px;text-transform:uppercase;">
                Premium Digital Solutions
              </p>
            </td>
          </tr>

          <!-- ALERT BADGE -->
          <tr>
            <td align="center" style="padding:32px 48px 0;">
              <div style="display:inline-block;background:#ECFDF5;border:1.5px solid #6EE7B7;border-radius:50px;padding:8px 20px;">
                <span style="color:#059669;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">
                  🔔 New Lead Received
                </span>
              </div>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:28px 48px 40px;">
              <p style="margin:0 0 24px;color:#374151;font-size:15px;line-height:1.6;">
                A new inquiry has been submitted through the website contact form. Here are the details:
              </p>

              <!-- DETAILS CARD -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border-radius:16px;overflow:hidden;border:1px solid #E5E7EB;">

                <tr style="border-bottom:1px solid #E5E7EB;">
                  <td style="padding:16px 24px;width:40%;">
                    <span style="color:#6B7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Name</span>
                  </td>
                  <td style="padding:16px 24px;">
                    <span style="color:#111827;font-size:15px;font-weight:600;">${name}</span>
                  </td>
                </tr>

                <tr style="border-bottom:1px solid #E5E7EB;">
                  <td style="padding:16px 24px;">
                    <span style="color:#6B7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Email</span>
                  </td>
                  <td style="padding:16px 24px;">
                    <a href="mailto:${email}" style="color:#00C2A8;font-size:15px;font-weight:600;text-decoration:none;">${email}</a>
                  </td>
                </tr>

                <tr style="border-bottom:1px solid #E5E7EB;">
                  <td style="padding:16px 24px;">
                    <span style="color:#6B7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Phone</span>
                  </td>
                  <td style="padding:16px 24px;">
                    <a href="tel:${phone}" style="color:#00C2A8;font-size:15px;font-weight:600;text-decoration:none;">${phone}</a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:16px 24px;">
                    <span style="color:#6B7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Service</span>
                  </td>
                  <td style="padding:16px 24px;">
                    <span style="background:#00C2A8;color:#ffffff;font-size:12px;font-weight:700;padding:4px 12px;border-radius:50px;letter-spacing:0.5px;">${service}</span>
                  </td>
                </tr>

              </table>

              <!-- CTA -->
              <div style="margin-top:32px;text-align:center;">
                <a
                  href="mailto:${email}"
                  style="display:inline-block;background:linear-gradient(135deg,#00C2A8,#00967E);color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;padding:14px 36px;border-radius:50px;letter-spacing:0.3px;"
                >
                  Reply to ${name} →
                </a>
              </div>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#F8FAFC;padding:24px 48px;text-align:center;border-top:1px solid #E5E7EB;">
              <p style="margin:0;color:#9CA3AF;font-size:12px;line-height:1.6;">
                This is an automated notification from GrowthGarage CRM.<br/>
                Do not reply to this email directly.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

/* =========================================
   EMAIL TEMPLATE — USER (Thank You)
========================================= */

const userEmailTemplate = ({ name, service }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You — GrowthGarage</title>
</head>
<body style="margin:0;padding:0;background:#F0FDF9;font-family:'Segoe UI',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 8px 40px rgba(0,194,168,0.12);">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#00C2A8 0%,#00967E 100%);padding:48px;text-align:center;">
              <div style="font-size:48px;margin-bottom:16px;">🎉</div>
              <h1 style="margin:0;color:#ffffff;font-size:30px;font-weight:800;letter-spacing:-0.5px;">
                Thank You, ${name}!
              </h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.9);font-size:16px;line-height:1.6;">
                We've received your message and we're excited to work with you.
              </p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:40px 48px;">

              <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.7;">
                Hi <strong>${name}</strong>,
              </p>

              <p style="margin:0 0 24px;color:#374151;font-size:15px;line-height:1.7;">
                Thank you for reaching out to <strong>GrowthGarage</strong>. We've received your inquiry for <strong>${service}</strong> and our team is already reviewing your request.
              </p>

              <!-- WHAT HAPPENS NEXT -->
              <div style="background:#F0FDF9;border-radius:16px;padding:28px;margin-bottom:28px;border:1px solid #A7F3D0;">
                <h3 style="margin:0 0 20px;color:#065F46;font-size:16px;font-weight:700;letter-spacing:0.3px;">
                  What Happens Next?
                </h3>

                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:10px 0;vertical-align:top;width:36px;">
                      <div style="width:28px;height:28px;background:#00C2A8;border-radius:50%;text-align:center;line-height:28px;color:white;font-size:12px;font-weight:700;">1</div>
                    </td>
                    <td style="padding:10px 0 10px 12px;vertical-align:top;">
                      <p style="margin:0;color:#374151;font-size:14px;line-height:1.6;">
                        <strong>Review</strong> — Our experts will review your requirements carefully.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;vertical-align:top;width:36px;">
                      <div style="width:28px;height:28px;background:#00C2A8;border-radius:50%;text-align:center;line-height:28px;color:white;font-size:12px;font-weight:700;">2</div>
                    </td>
                    <td style="padding:10px 0 10px 12px;vertical-align:top;">
                      <p style="margin:0;color:#374151;font-size:14px;line-height:1.6;">
                        <strong>Contact</strong> — We'll reach out within <strong>24 hours</strong> to discuss your project.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;vertical-align:top;width:36px;">
                      <div style="width:28px;height:28px;background:#00C2A8;border-radius:50%;text-align:center;line-height:28px;color:white;font-size:12px;font-weight:700;">3</div>
                    </td>
                    <td style="padding:10px 0 10px 12px;vertical-align:top;">
                      <p style="margin:0;color:#374151;font-size:14px;line-height:1.6;">
                        <strong>Proposal</strong> — We'll share a custom strategy tailored just for you.
                      </p>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- SERVICE BADGE -->
              <p style="margin:0 0 8px;color:#6B7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">
                Service Requested
              </p>
              <div style="display:inline-block;background:linear-gradient(135deg,#00C2A8,#00967E);color:#ffffff;font-size:14px;font-weight:700;padding:8px 20px;border-radius:50px;letter-spacing:0.3px;margin-bottom:28px;">
                ${service}
              </div>

              <!-- DIVIDER -->
              <hr style="border:none;border-top:1px solid #E5E7EB;margin:8px 0 28px;" />

              <!-- CONTACT INFO -->
              <p style="margin:0 0 12px;color:#374151;font-size:14px;line-height:1.6;">
                If you have any immediate questions, feel free to reach us at:
              </p>
              <p style="margin:0 0 6px;color:#374151;font-size:14px;">
                📞 <a href="tel:+919958938205" style="color:#00C2A8;text-decoration:none;font-weight:600;">+91 9958938205</a>
              </p>
              <p style="margin:0;color:#374151;font-size:14px;">
                ✉️ <a href="mailto:demo@growthgarage.in" style="color:#00C2A8;text-decoration:none;font-weight:600;">demo@growthgarage.in</a>
              </p>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:linear-gradient(135deg,#00C2A8 0%,#00967E 100%);padding:32px 48px;text-align:center;">
              <p style="margin:0 0 6px;color:rgba(255,255,255,0.95);font-size:16px;font-weight:700;">
                GrowthGarage
              </p>
              <p style="margin:0 0 16px;color:rgba(255,255,255,0.75);font-size:12px;letter-spacing:1.5px;text-transform:uppercase;">
                Premium Digital Solutions
              </p>
              <p style="margin:0;color:rgba(255,255,255,0.65);font-size:12px;line-height:1.6;">
                Noida & Moradabad, Uttar Pradesh, India<br/>
                You received this email because you contacted us through our website.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

/* =========================================
   CONTROLLER — sendContactMail
========================================= */

const sendContactMail = async (req, res) => {
  try {
    /* ── Validate ── */
    const missingField = requiredFields.find(
      (field) => !String(req.body[field] || "").trim(),
    );

    if (missingField) {
      return res.status(400).json({
        success: false,
        message: `${missingField} is required`,
      });
    }

    const name = escapeHtml(req.body.name);
    const email = escapeHtml(req.body.email);
    const phone = escapeHtml(req.body.phone);
    const service = escapeHtml(req.body.service);

    const transporter = createTransporter();
    const receiverEmail =
      process.env.CONTACT_RECEIVER || process.env.EMAIL_USER;

    /* ── Send both emails concurrently for low latency ── */
    await Promise.all([
      // 1. Admin notification
      transporter.sendMail({
        from: `"GrowthGarage CRM" <${process.env.EMAIL_USER}>`,
        to: receiverEmail,
        subject: `🔔 New Lead: ${name} — ${service}`,
        html: adminEmailTemplate({ name, email, phone, service }),
      }),

      // 2. User thank-you
      transporter.sendMail({
        from: `"GrowthGarage" <${process.env.EMAIL_USER}>`,
        to: req.body.email,
        subject: `Thank You for Contacting GrowthGarage, ${name}! 🚀`,
        html: userEmailTemplate({ name, service }),
      }),
    ]);

    return res.status(200).json({
      success: true,
      message: "Mail Sent Successfully",
    });
  } catch (error) {
    console.error("Contact mail error:", {
      message: error.message,
      code: error.code,
      command: error.command,
    });

    return res.status(500).json({
      success: false,
      message: "Unable to send mail right now",
    });
  }
};

module.exports = { sendContactMail };
