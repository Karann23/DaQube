const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// HTML entity escape helper to protect against injection
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// -------------------------------------------------------------------
// 1. Template: Visitor Auto-Confirmation (24-Hour SLA)
// -------------------------------------------------------------------
function generateClientConfirmationHtml({ senderName, senderEmail, company, capability, volumeScope, timeline, message }) {
  const currentYear = new Date().getFullYear();
  const safeName = escapeHtml(senderName);
  const safeEmail = escapeHtml(senderEmail);
  const safeCompany = escapeHtml(company);
  const safeCapability = escapeHtml(capability);
  const safeVolume = escapeHtml(volumeScope);
  const safeTimeline = escapeHtml(timeline);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You for Contacting DaQube</title>
</head>
<body style="margin:0;padding:0;background-color:#0A0D12;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;background-color:#0A0D12;">
    <tr>
      <td align="center">
        <!-- Main Email Container (660px Wide) -->
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:660px;background:#FFFFFF;border-radius:20px;overflow:hidden;box-shadow:0 12px 40px rgba(0,0,0,0.4);">
          <!-- Top Accent Gradient Line -->
          <tr>
            <td style="height:5px;background:linear-gradient(90deg, #EC5E27 0%, #FF8A50 50%, #EC5E27 100%);"></td>
          </tr>

          <!-- Brand Header -->
          <tr>
            <td style="background:#12151A;padding:32px 40px;border-bottom:1px solid rgba(255,255,255,0.08);">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <!-- Official DaQube Brand Display -->
                    <span style="font-size:26px;font-weight:900;color:#FFFFFF;letter-spacing:-0.5px;">Da<span style="color:#EC5E27;">Qube</span></span>
                    <span style="display:block;font-size:11px;color:#94A3B8;font-family:'Courier New',monospace;letter-spacing:0.18em;text-transform:uppercase;margin-top:6px;">
                      HUMAN-CENTERED AI DATA &middot; ENTERPRISE DISCOVERY
                    </span>
                  </td>
                  <td align="right">
                    <span style="display:inline-block;padding:6px 14px;background:rgba(236,94,39,0.14);border:1px solid rgba(236,94,39,0.3);border-radius:20px;color:#EC5E27;font-size:11px;font-weight:700;letter-spacing:0.05em;">
                      ISO 27001 ALIGNED
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <h2 style="margin:0 0 16px;color:#0F172A;font-size:22px;font-weight:800;line-height:1.3;">
                Thank you for your project brief, ${safeName}!
              </h2>
              <p style="color:#475569;font-size:15px;line-height:1.65;margin:0 0 24px;">
                We have registered your project requirements in the DaQube intake queue. A designated AI Solutions Architect is currently reviewing your technical specifications to calibrate sample cohorts and delivery milestones.
              </p>

              <!-- 24-Hour SLA Box -->
              <div style="background:#FFF5F0;border:1.5px solid rgba(236,94,39,0.28);border-radius:14px;padding:20px 24px;margin-bottom:28px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:36px;vertical-align:top;font-size:24px;">⏱</td>
                    <td style="vertical-align:middle;padding-left:12px;">
                      <strong style="color:#C64614;display:block;font-size:14px;font-weight:800;letter-spacing:0.02em;">
                        VERIFIED 24-HOUR ARCHITECT RESPONSE
                      </strong>
                      <span style="font-size:13px;color:#64748B;line-height:1.5;display:block;margin-top:3px;">
                        A senior data solutions lead will contact you directly at <strong style="color:#0F172A;">${safeEmail}</strong> with an initial scoping review and acceptance matrix.
                      </span>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Registered Specifications Table -->
              <div style="margin-bottom:28px;">
                <span style="display:block;font-size:11px;font-weight:800;color:#94A3B8;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:10px;">
                  REGISTERED PROJECT PARAMETERS
                </span>
                <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;font-size:13.5px;overflow:hidden;">
                  ${safeCapability ? `
                  <tr>
                    <td style="padding:12px 18px;color:#64748B;width:32%;border-bottom:1px solid #EDF2F7;font-weight:600;">Data Modality:</td>
                    <td style="padding:12px 18px;font-weight:800;color:#0F172A;border-bottom:1px solid #EDF2F7;">${safeCapability}</td>
                  </tr>` : ''}
                  ${safeVolume ? `
                  <tr>
                    <td style="padding:12px 18px;color:#64748B;border-bottom:1px solid #EDF2F7;font-weight:600;">Volume / Scale:</td>
                    <td style="padding:12px 18px;font-weight:700;color:#0F172A;border-bottom:1px solid #EDF2F7;">${safeVolume}</td>
                  </tr>` : ''}
                  ${safeTimeline ? `
                  <tr>
                    <td style="padding:12px 18px;color:#64748B;border-bottom:1px solid #EDF2F7;font-weight:600;">Target Timeline:</td>
                    <td style="padding:12px 18px;font-weight:800;color:#EC5E27;border-bottom:1px solid #EDF2F7;">${safeTimeline}</td>
                  </tr>` : ''}
                  ${safeCompany ? `
                  <tr>
                    <td style="padding:12px 18px;color:#64748B;border-bottom:1px solid #EDF2F7;font-weight:600;">Organization:</td>
                    <td style="padding:12px 18px;color:#0F172A;border-bottom:1px solid #EDF2F7;font-weight:700;">${safeCompany}</td>
                  </tr>` : ''}
                  <tr>
                    <td style="padding:14px 18px;color:#64748B;vertical-align:top;font-weight:600;">Technical Brief:</td>
                    <td style="padding:14px 18px;color:#334155;line-height:1.6;font-size:13px;">${safeMessage}</td>
                  </tr>
                </table>
              </div>

              <!-- Assistance & Reply Notice -->
              <p style="font-size:13.5px;color:#64748B;line-height:1.6;margin:0 0 24px;">
                Need to attach technical documentation, sample data schemas, or NDA documents? Reply directly to this confirmation email or contact our desk at <a href="mailto:ayeasif.apple@gmail.com" style="color:#EC5E27;font-weight:700;text-decoration:none;">ayeasif.apple@gmail.com</a>.
              </p>

              <!-- Confidentiality & Privilege Disclaimer -->
              <div style="margin-top:32px;padding:18px 20px;background:#F8FAFC;border-left:3.5px solid #EC5E27;border-radius:8px;font-size:11px;color:#64748B;line-height:1.65;">
                <strong style="color:#0F172A;display:block;margin-bottom:5px;font-size:11.5px;letter-spacing:0.04em;">
                  LEGAL &amp; CONFIDENTIALITY NOTICE
                </strong>
                This electronic mail transmission, together with any attachments, is intended solely for the confidential use of the named recipient (<strong>${safeEmail}</strong>) in connection with bona fide AI dataset engineering discussions with DaQube Technologies Inc. This transmission contains proprietary technical methodologies, trade secrets, and legally privileged commercial terms governed under ISO/IEC 27001 data protection protocols. Any unauthorized reading, dissemination, duplication, or disclosure is strictly prohibited by law. If you are not the intended recipient or have received this transmission in error, please immediately alert the sender by reply email and permanently delete this communication from all records.
              </div>
            </td>
          </tr>

          <!-- Email Footer -->
          <tr>
            <td style="background:#12151A;padding:32px 40px;color:#94A3B8;font-size:12px;border-top:1px solid rgba(255,255,255,0.08);">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:top;">
                    <span style="font-size:18px;font-weight:900;color:#FFFFFF;">Da<span style="color:#EC5E27;">Qube</span></span>
                    <p style="margin:8px 0 16px;color:#64748B;font-size:12px;line-height:1.5;">
                      Architecting the ground truth for physical &amp; generative AI systems worldwide.
                    </p>
                    <div style="margin:14px 0;">
                      <a href="https://www.linkedin.com/company/daqube-ai/" target="_blank" style="display:inline-block;background:#0A66C2;color:#FFFFFF;padding:7px 14px;border-radius:6px;font-size:11.5px;font-weight:700;text-decoration:none;margin-right:10px;">LinkedIn &rarr;</a>
                      <a href="https://daqube.ai" target="_blank" style="display:inline-block;background:rgba(255,255,255,0.08);color:#E2E8F0;padding:7px 14px;border-radius:6px;font-size:11.5px;font-weight:600;text-decoration:none;">daqube.ai</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:16px;border-top:1px solid rgba(255,255,255,0.06);color:#475569;font-size:11.5px;">
                    &copy; ${currentYear} DaQube Technologies Inc. All rights reserved. &middot; Global Contributor Network in 100+ Countries.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// -------------------------------------------------------------------
// 2. Template: Admin Notification (Delivered to you)
// -------------------------------------------------------------------
function generateAdminNotificationHtml({ senderName, senderEmail, company, capability, volumeScope, timeline, message }) {
  const safeName = escapeHtml(senderName);
  const safeEmail = escapeHtml(senderEmail);
  const safeCompany = escapeHtml(company);
  const safeCapability = escapeHtml(capability);
  const safeVolume = escapeHtml(volumeScope);
  const safeTimeline = escapeHtml(timeline);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Project Inquiry — DaQube</title>
</head>
<body style="margin:0;padding:0;background-color:#0A0D12;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;background-color:#0A0D12;">
    <tr>
      <td align="center">
        <!-- Main Email Container (660px Wide) -->
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:660px;background:#FFFFFF;border-radius:20px;overflow:hidden;box-shadow:0 12px 40px rgba(0,0,0,0.4);">
          <!-- Top Accent Line -->
          <tr>
            <td style="height:5px;background:linear-gradient(90deg, #EC5E27 0%, #FF8A50 50%, #EC5E27 100%);"></td>
          </tr>

          <!-- Admin Alert Banner -->
          <tr>
            <td style="background:#12151A;padding:28px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:22px;font-weight:900;color:#FFFFFF;">Da<span style="color:#EC5E27;">Qube</span></span>
                    <span style="display:inline-block;margin-left:12px;padding:4px 10px;background:#EC5E27;color:#FFFFFF;border-radius:6px;font-size:11px;font-weight:800;letter-spacing:0.08em;vertical-align:middle;">
                      NEW INQUIRY
                    </span>
                  </td>
                  <td align="right">
                    <span style="color:#94A3B8;font-size:12px;font-family:monospace;">
                      ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding:36px;">
              <h2 style="margin:0 0 8px;color:#0F172A;font-size:21px;font-weight:800;">
                Inbound Project Brief from ${safeName}
              </h2>
              <p style="color:#64748B;font-size:14px;margin:0 0 24px;">
                A client has submitted requirements via the DaQube intake portal.
              </p>

              <!-- One-Click Reply Button -->
              <div style="margin-bottom:28px;">
                <a href="mailto:${safeEmail}?subject=Re:%20Your%20Inquiry%20with%20DaQube%20Technologies%20[${encodeURIComponent(safeCapability || 'AI Data')}]" style="display:inline-block;background:#EC5E27;color:#FFFFFF;padding:14px 26px;border-radius:10px;font-size:14px;font-weight:700;text-decoration:none;box-shadow:0 6px 18px rgba(236,94,39,0.35);">
                  ✉ Reply Directly to ${safeName} (${safeEmail}) &rarr;
                </a>
              </div>

              <!-- Client Parameter Breakdown -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;font-size:13.5px;margin-bottom:24px;overflow:hidden;">
                <tr>
                  <td style="padding:12px 16px;color:#64748B;width:28%;border-bottom:1px solid #EDF2F7;font-weight:600;">Client:</td>
                  <td style="padding:12px 16px;font-weight:800;color:#0F172A;border-bottom:1px solid #EDF2F7;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;color:#64748B;border-bottom:1px solid #EDF2F7;font-weight:600;">Email:</td>
                  <td style="padding:12px 16px;font-weight:800;color:#EC5E27;border-bottom:1px solid #EDF2F7;">
                    <a href="mailto:${safeEmail}" style="color:#EC5E27;text-decoration:underline;">${safeEmail}</a>
                  </td>
                </tr>
                ${safeCompany ? `
                <tr>
                  <td style="padding:12px 16px;color:#64748B;border-bottom:1px solid #EDF2F7;font-weight:600;">Organization:</td>
                  <td style="padding:12px 16px;color:#0F172A;font-weight:700;border-bottom:1px solid #EDF2F7;">${safeCompany}</td>
                </tr>` : ''}
                ${safeCapability ? `
                <tr>
                  <td style="padding:12px 16px;color:#64748B;border-bottom:1px solid #EDF2F7;font-weight:600;">Modality:</td>
                  <td style="padding:12px 16px;color:#0F172A;font-weight:800;border-bottom:1px solid #EDF2F7;">${safeCapability}</td>
                </tr>` : ''}
                ${safeVolume ? `
                <tr>
                  <td style="padding:12px 16px;color:#64748B;border-bottom:1px solid #EDF2F7;font-weight:600;">Scope / Volume:</td>
                  <td style="padding:12px 16px;color:#0F172A;font-weight:700;border-bottom:1px solid #EDF2F7;">${safeVolume}</td>
                </tr>` : ''}
                ${safeTimeline ? `
                <tr>
                  <td style="padding:12px 16px;color:#64748B;border-bottom:1px solid #EDF2F7;font-weight:600;">Delivery Target:</td>
                  <td style="padding:12px 16px;color:#EC5E27;font-weight:800;border-bottom:1px solid #EDF2F7;">${safeTimeline}</td>
                </tr>` : ''}
              </table>

              <!-- Client Technical Message -->
              <span style="display:block;font-size:11.5px;font-weight:800;color:#94A3B8;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:8px;">
                TECHNICAL BRIEF &amp; NOTES
              </span>
              <div style="background:#F1F5F9;border-left:4px solid #EC5E27;padding:16px 20px;border-radius:8px;font-size:14px;color:#1E293B;line-height:1.65;white-space:pre-wrap;margin-bottom:24px;">${safeMessage}</div>

              <!-- Internal Confidentiality Notice -->
              <div style="margin-top:24px;padding:16px 18px;background:#FFF3ED;border:1px solid rgba(236,94,39,0.3);border-radius:8px;font-size:11.5px;color:#8E4324;line-height:1.6;">
                <strong style="display:block;margin-bottom:4px;">INTERNAL &amp; CONFIDENTIAL INTAKE FILE</strong>
                This notification contains proprietary prospective client requirements received through the DaQube intake gateway. Regulated under client Non-Disclosure Agreement (NDA) rules and ISO/IEC 27001 Information Security standards. Do not forward or distribute outside the designated solutions engineering team.
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// -------------------------------------------------------------------
// 3. API Route: POST /api/send-email
// -------------------------------------------------------------------
app.post('/api/send-email', async (req, res) => {
  try {
    const data = req.body || {};
    const senderName = (data.name || '').trim() || 'Valued Client';
    const senderEmail = (data.email || '').trim();
    const company = (data.company || '').trim();
    const capability = (data.capability || '').trim();
    const volumeScope = (data.volume_scope || data.scope || '').trim();
    const timeline = (data.timeline || '').trim();
    const message = (data.message || data.details || '').trim() || 'No additional notes provided.';

    if (!senderEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
      return res.status(400).json({ success: false, error: 'A valid email address is required.' });
    }

    const gmailUser = process.env.GMAIL_USER || 'ayeasif.apple@gmail.com';
    const gmailPass = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '');

    if (!gmailPass) {
      console.error('ERROR: GMAIL_APP_PASSWORD is not set in .env');
      return res.status(500).json({ success: false, error: 'Mail server credentials are not configured.' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // 1. Send Admin Notification to Team
    const adminPromise = transporter.sendMail({
      from: `"${senderName} via DaQube" <${gmailUser}>`,
      to: gmailUser,
      replyTo: senderEmail,
      subject: `🔔 New Project Inquiry: ${senderName}${capability ? ` - ${capability}` : ''}`,
      html: generateAdminNotificationHtml({ senderName, senderEmail, company, capability, volumeScope, timeline, message }),
    });

    // 2. Send Branded Auto-Confirmation to Client
    const clientPromise = transporter.sendMail({
      from: `"DaQube AI Solutions" <${gmailUser}>`,
      to: senderEmail,
      replyTo: gmailUser,
      subject: `Thank you for contacting DaQube — We'll reach out within 24 hours`,
      html: generateClientConfirmationHtml({ senderName, senderEmail, company, capability, volumeScope, timeline, message }),
    });

    await Promise.all([adminPromise, clientPromise]);

    return res.json({
      success: true,
      message: `Project inquiry successfully received. Auto-confirmation sent to ${senderEmail}.`,
    });
  } catch (err) {
    console.error('Email delivery error:', err);
    return res.status(500).json({ success: false, error: err.message || 'Email delivery failed.' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'DaQube Dual Mailer Service',
    time: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`🚀 DaQube Mail Server running on http://localhost:${PORT}`);
});
