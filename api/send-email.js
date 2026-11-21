import nodemailer from "nodemailer";

function generateWebsiteFooterHtml(currentYear) {
  return `
<!-- EXACT DAQUBE WEBSITE FOOTER REPLICATED FOR EMAIL -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B0D11;border-top:1px solid #1E232E;padding:36px 32px 24px;color:#8E939D;font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
  <tr>
    <td style="padding-bottom:28px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <!-- Col 1: Brand & Corporate Statement -->
          <td valign="top" style="width:38%;padding-right:20px;">
            <span style="font-size:22px;font-weight:800;color:#FFFFFF;display:inline-block;letter-spacing:-0.5px;">
              Da<span style="color:#EC5E27;">Qube</span>
            </span>
            <p style="margin:10px 0 14px;color:#8E939D;font-size:11.5px;line-height:1.6;max-width:260px;">
              The high-precision data engine for frontier AI models. Built on verified domain expertise, air-gapped security, and sub-millisecond acoustic and pixel ground truth.
            </p>
            <div style="margin-bottom:10px;">
              <a href="mailto:ayeasif.apple@gmail.com" style="color:#EC5E27;font-size:12px;font-weight:600;text-decoration:none;">
                ✉ ayeasif.apple@gmail.com
              </a>
            </div>
            <div style="font-family:'Courier New',Courier,monospace;font-size:10px;color:#6B7280;line-height:1.4;">
              ISO 27001 Aligned · ISO 27001 Certified · HIPAA BAA
            </div>
          </td>

          <!-- Col 2: Core Capabilities -->
          <td valign="top" style="width:22%;padding-right:12px;">
            <span style="display:block;font-size:11px;font-weight:700;color:#FFFFFF;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:12px;">
              Core Capabilities
            </span>
            <ul style="margin:0;padding:0;list-style:none;font-size:11px;line-height:1.85;">
              <li><a href="https://daqube.ai/services/image-collection" style="color:#8E939D;text-decoration:none;">Image Collection</a></li>
              <li><a href="https://daqube.ai/services/video-collection" style="color:#8E939D;text-decoration:none;">Video Collection</a></li>
              <li><a href="https://daqube.ai/services/speech-collection" style="color:#8E939D;text-decoration:none;">Speech & Audio</a></li>
              <li><a href="https://daqube.ai/services/text-collection" style="color:#8E939D;text-decoration:none;">Text & Labeling</a></li>
              <li><a href="https://daqube.ai/services/annotation" style="color:#8E939D;text-decoration:none;">Image Annotation</a></li>
              <li><a href="https://daqube.ai/services/transcription" style="color:#8E939D;text-decoration:none;">Audio Transcription</a></li>
              <li><a href="https://daqube.ai/services/adas-lidar" style="color:#8E939D;text-decoration:none;">ADAS & LiDAR</a></li>
              <li><a href="https://daqube.ai/services/off-the-shelf" style="color:#8E939D;text-decoration:none;">Off-The-Shelf Datasets</a></li>
            </ul>
          </td>

          <!-- Col 3: Network & Trust -->
          <td valign="top" style="width:20%;padding-right:12px;">
            <span style="display:block;font-size:11px;font-weight:700;color:#FFFFFF;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:12px;">
              Network & Trust
            </span>
            <ul style="margin:0;padding:0;list-style:none;font-size:11px;line-height:1.85;">
              <li><a href="https://daqube.ai/network/contributors" style="color:#8E939D;text-decoration:none;">Global Workforce</a></li>
              <li><a href="https://daqube.ai/network/domain-experts" style="color:#8E939D;text-decoration:none;">Tier-4 Specialists</a></li>
              <li><a href="https://daqube.ai/network/ethics-compliance" style="color:#8E939D;text-decoration:none;">Ethical Standards</a></li>
              <li><a href="https://daqube.ai/quality/security-compliance" style="color:#8E939D;text-decoration:none;">Enterprise VDI</a></li>
              <li><a href="https://daqube.ai/quality/calibration-framework" style="color:#8E939D;text-decoration:none;">Calibration Framework</a></li>
              <li><a href="https://daqube.ai/case-studies" style="color:#8E939D;text-decoration:none;">Case Studies</a></li>
            </ul>
          </td>

          <!-- Col 4: Company & LinkedIn -->
          <td valign="top" style="width:20%;">
            <span style="display:block;font-size:11px;font-weight:700;color:#FFFFFF;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:12px;">
              Company
            </span>
            <ul style="margin:0;padding:0;list-style:none;font-size:11px;line-height:1.85;margin-bottom:14px;">
              <li><a href="https://daqube.ai/about/company" style="color:#8E939D;text-decoration:none;">Company & Leadership</a></li>
              <li><a href="https://daqube.ai/about/careers" style="color:#8E939D;text-decoration:none;">Workforce & Culture</a></li>
              <li><a href="https://daqube.ai/industries" style="color:#8E939D;text-decoration:none;">Industries</a></li>
              <li><a href="https://daqube.ai/insights" style="color:#8E939D;text-decoration:none;">Insights & Research</a></li>
            </ul>
            <div style="margin-bottom:8px;">
              <a href="https://www.linkedin.com/company/daqube" target="_blank" style="display:inline-block;background:#0A66C2;color:#FFFFFF;padding:6px 14px;border-radius:6px;font-size:11px;font-weight:700;text-decoration:none;">
                LinkedIn &rarr;
              </a>
            </div>
            <div>
              <a href="https://daqube.ai/contact" style="color:#EC5E27;font-size:11.5px;font-weight:700;text-decoration:none;">
                Discuss a Project &rarr;
              </a>
            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Bottom Bar: Legal & Attribution -->
  <tr>
    <td style="border-top:1px solid #1E232E;padding-top:18px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:11px;color:#6B7280;">
        <tr>
          <td>
            &copy; ${currentYear} DaQube Technologies Inc. All rights reserved.
            <span style="display:block;margin-top:2px;font-size:10px;color:#4B5563;">
              Architecting the ground truth for physical and generative AI.
            </span>
          </td>
          <td align="right" valign="top">
            <a href="https://www.linkedin.com/company/daqube" target="_blank" style="color:#8E939D;text-decoration:none;margin-right:12px;">LinkedIn</a>
            <a href="https://daqube.ai/privacy" style="color:#8E939D;text-decoration:none;margin-right:12px;">Privacy Notice</a>
            <a href="https://daqube.ai/terms" style="color:#8E939D;text-decoration:none;">Terms of Service</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

function generateClientConfirmationHtml({ senderName, senderEmail, company, capability, volumeScope, timeline, compliance, message }) {
  const currentYear = new Date().getFullYear();
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting DaQube</title>
</head>
<body style="margin:0;padding:0;background-color:#0D0F12;font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:#12151A;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0D0F12;padding:40px 16px;">
    <tr>
      <td align="center">
        <!-- WIDER CONTAINER: 700px MAX-WIDTH -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:700px;background-color:#FFFFFF;border-radius:24px;overflow:hidden;box-shadow:0 25px 60px rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.08);">
          <tr>
            <td style="height:4px;background:linear-gradient(90deg, #EC5E27 0%, #FFA26B 100%);"></td>
          </tr>
          <tr>
            <td style="background-color:#12151A;padding:34px 40px 28px;text-align:left;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:28px;font-weight:800;color:#FFFFFF;letter-spacing:-0.5px;display:inline-block;">
                      Da<span style="color:#EC5E27;">Qube</span>
                    </span>
                    <span style="display:block;font-size:11px;font-family:monospace;color:#8E939D;letter-spacing:0.12em;text-transform:uppercase;margin-top:6px;">
                      The Data Behind Intelligence
                    </span>
                  </td>
                  <td align="right" valign="top">
                    <span style="display:inline-block;padding:6px 14px;border-radius:20px;background:rgba(236,94,39,0.15);border:1px solid rgba(236,94,39,0.3);color:#EC5E27;font-size:11px;font-family:monospace;font-weight:700;">
                      SLA &lt; 24h
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:40px 40px 32px;background-color:#FFFFFF;">
              <h1 style="margin:0 0 16px;font-size:24px;font-weight:800;color:#12151A;letter-spacing:-0.4px;">
                Thank you for contacting us, ${senderName}!
              </h1>
              <p style="margin:0 0 22px;font-size:15px;line-height:1.65;color:#4A505C;">
                We have received your project requirements and technical brief. An AI Solutions Architect and Data Workflow Lead are currently reviewing your acceptance criteria.
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF3ED;border:1px solid rgba(236,94,39,0.25);border-radius:14px;margin-bottom:28px;">
                <tr>
                  <td style="padding:18px 22px;">
                    <strong style="color:#EC5E27;font-size:14.5px;display:block;margin-bottom:4px;">⏱ Guaranteed Technical Follow-Up Within 24 Hours</strong>
                    <span style="font-size:13.5px;color:#5F646D;line-height:1.55;">
                      A technical lead will reach out to you directly at <strong>${senderEmail}</strong> to review taxonomy calibration, pilot feasibility benchmarks, and mutual NDA execution.
                    </span>
                  </td>
                </tr>
              </table>

              <h3 style="margin:0 0 12px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#12151A;">
                Summary of Your Submission
              </h3>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border:1px solid #E9ECEF;border-radius:12px;overflow:hidden;margin-bottom:24px;font-size:13.5px;">
                ${capability ? `<tr><td style="padding:12px 18px;color:#64748B;border-bottom:1px solid #E9ECEF;width:35%;">Primary Capability:</td><td style="padding:12px 18px;font-weight:700;color:#12151A;border-bottom:1px solid #E9ECEF;">${capability}</td></tr>` : ''}
                ${volumeScope ? `<tr><td style="padding:12px 18px;color:#64748B;border-bottom:1px solid #E9ECEF;">Estimated Scale:</td><td style="padding:12px 18px;font-weight:600;color:#12151A;border-bottom:1px solid #E9ECEF;">${volumeScope}</td></tr>` : ''}
                ${timeline ? `<tr><td style="padding:12px 18px;color:#64748B;border-bottom:1px solid #E9ECEF;">Target Delivery:</td><td style="padding:12px 18px;font-weight:700;color:#EC5E27;border-bottom:1px solid #E9ECEF;">${timeline}</td></tr>` : ''}
                ${company ? `<tr><td style="padding:12px 18px;color:#64748B;border-bottom:1px solid #E9ECEF;">Organization / Lab:</td><td style="padding:12px 18px;font-weight:600;color:#12151A;border-bottom:1px solid #E9ECEF;">${company}</td></tr>` : ''}
                ${compliance ? `<tr><td style="padding:12px 18px;color:#64748B;border-bottom:1px solid #E9ECEF;">Security Add-ons:</td><td style="padding:12px 18px;font-weight:600;color:#12151A;border-bottom:1px solid #E9ECEF;">${compliance}</td></tr>` : ''}
                <tr>
                  <td style="padding:12px 18px;color:#64748B;vertical-align:top;">Technical Brief:</td>
                  <td style="padding:12px 18px;color:#12151A;line-height:1.55;">${message}</td>
                </tr>
              </table>

              <p style="margin:0 0 20px;font-size:13.5px;color:#5F646D;line-height:1.5;">
                Need to add requirements? Reply directly to this email or reach us anytime at <a href="mailto:ayeasif.apple@gmail.com" style="color:#EC5E27;font-weight:600;text-decoration:none;">ayeasif.apple@gmail.com</a>.
              </p>

              <!-- TYPEWRITER CONFIDENTIAL TERMS IN SMALL SIZE -->
              <div style="background:#F8FAFC;border:1px dashed #CBD5E1;border-left:3px solid #EC5E27;border-radius:8px;padding:12px 16px;font-family:'Courier New',Courier,'Lucida Console',Monaco,monospace;font-size:10.5px;color:#475569;line-height:1.6;letter-spacing:-0.2px;">
                <strong style="display:block;color:#0F172A;margin-bottom:4px;font-family:'Courier New',Courier,monospace;letter-spacing:0.04em;">
                  [CONFIDENTIALITY NOTICE & PRE-EXECUTION NDA COVENANTS]
                </strong>
                This electronic transmission and any attachments are intended solely for the designated addressee(s) and contain proprietary, legally privileged, and trade-secret technical material belonging to DaQube Technologies Inc. and the submitting entity. Pre-execution mutual non-disclosure covenants apply to this technical brief. If you are not the intended recipient, please immediately notify ayeasif.apple@gmail.com and delete all copies. Any unauthorized review, dissemination, copying, or reliance upon this communication is strictly prohibited.
              </div>
            </td>
          </tr>

          <!-- EXACT WEBSITE FOOTER -->
          <tr>
            <td>
              ${generateWebsiteFooterHtml(currentYear)}
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function generateAdminNotificationHtml({ senderName, senderEmail, company, capability, volumeScope, timeline, compliance, message }) {
  const currentYear = new Date().getFullYear();
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Website Inquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#0D0F12;font-family:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0D0F12;padding:40px 16px;">
    <tr>
      <td align="center">
        <!-- WIDER CONTAINER: 700px MAX-WIDTH -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:700px;background:#FFFFFF;border-radius:24px;overflow:hidden;box-shadow:0 25px 60px rgba(0,0,0,0.5);">
          <tr>
            <td style="height:4px;background:linear-gradient(90deg, #EC5E27 0%, #FFA26B 100%);"></td>
          </tr>
          <tr>
            <td style="background:#12151A;padding:26px 36px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:24px;font-weight:800;color:#FFFFFF;">Da<span style="color:#EC5E27;">Qube</span></span>
                    <span style="display:block;font-size:11px;color:#8E939D;font-family:monospace;letter-spacing:0.1em;text-transform:uppercase;margin-top:4px;">
                      Website Contact Engine
                    </span>
                  </td>
                  <td align="right">
                    <span style="background:#EC5E27;color:#FFFFFF;padding:5px 12px;border-radius:12px;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;">
                      New Lead
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 36px 28px;">
              <h2 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#12151A;">
                New Project Inquiry from ${senderName}
              </h2>
              <p style="margin:0 0 22px;font-size:13.5px;color:#5F646D;">
                Received on ${new Date().toLocaleString()} &bull; <strong>Auto-confirmation sent to client</strong>
              </p>

              <div style="margin-bottom:26px;">
                <a href="mailto:${senderEmail}?subject=Re: Your Project Inquiry with DaQube" style="display:inline-block;background:#EC5E27;color:#FFFFFF;padding:13px 24px;border-radius:10px;font-size:14px;font-weight:700;text-decoration:none;box-shadow:0 4px 14px rgba(236,94,39,0.35);">
                  ✉ Reply Directly to ${senderName} (${senderEmail})
                </a>
              </div>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border:1px solid #E9ECEF;border-radius:12px;font-size:13.5px;margin-bottom:22px;">
                <tr><td style="padding:12px 16px;color:#64748B;border-bottom:1px solid #E9ECEF;width:32%;">Client Name:</td><td style="padding:12px 16px;font-weight:700;color:#12151A;border-bottom:1px solid #E9ECEF;">${senderName}</td></tr>
                <tr><td style="padding:12px 16px;color:#64748B;border-bottom:1px solid #E9ECEF;">Work Email:</td><td style="padding:12px 16px;font-weight:700;color:#EC5E27;border-bottom:1px solid #E9ECEF;"><a href="mailto:${senderEmail}" style="color:#EC5E27;text-decoration:none;">${senderEmail}</a></td></tr>
                ${company ? `<tr><td style="padding:12px 16px;color:#64748B;border-bottom:1px solid #E9ECEF;">Organization:</td><td style="padding:12px 16px;font-weight:600;color:#12151A;border-bottom:1px solid #E9ECEF;">${company}</td></tr>` : ''}
                ${capability ? `<tr><td style="padding:12px 16px;color:#64748B;border-bottom:1px solid #E9ECEF;">Requested Modality:</td><td style="padding:12px 16px;font-weight:700;color:#12151A;border-bottom:1px solid #E9ECEF;">${capability}</td></tr>` : ''}
                ${volumeScope ? `<tr><td style="padding:12px 16px;color:#64748B;border-bottom:1px solid #E9ECEF;">Dataset Volume:</td><td style="padding:12px 16px;font-weight:600;color:#12151A;border-bottom:1px solid #E9ECEF;">${volumeScope}</td></tr>` : ''}
                ${timeline ? `<tr><td style="padding:12px 16px;color:#64748B;border-bottom:1px solid #E9ECEF;">Target Urgency:</td><td style="padding:12px 16px;font-weight:600;color:#12151A;border-bottom:1px solid #E9ECEF;">${timeline}</td></tr>` : ''}
                ${compliance ? `<tr><td style="padding:12px 16px;color:#64748B;border-bottom:1px solid #E9ECEF;">Compliance:</td><td style="padding:12px 16px;font-weight:600;color:#12151A;border-bottom:1px solid #E9ECEF;">${compliance}</td></tr>` : ''}
              </table>

              <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;text-transform:uppercase;color:#8E939D;letter-spacing:0.05em;">
                Technical Brief & Message:
              </h4>
              <div style="background:#FFFFFF;border:1px solid #E9ECEF;border-left:3px solid #EC5E27;padding:16px 18px;border-radius:8px;font-size:13.5px;color:#18181B;line-height:1.6;white-space:pre-wrap;margin-bottom:20px;">
${message}
              </div>

              <!-- TYPEWRITER CONFIDENTIAL TERMS IN SMALL SIZE -->
              <div style="background:#F8FAFC;border:1px dashed #CBD5E1;border-left:3px solid #EC5E27;border-radius:8px;padding:12px 14px;font-family:'Courier New',Courier,'Lucida Console',Monaco,monospace;font-size:10.5px;color:#475569;line-height:1.55;letter-spacing:-0.2px;">
                <strong style="display:block;color:#0F172A;margin-bottom:4px;font-family:'Courier New',Courier,monospace;letter-spacing:0.04em;">
                  [INTERNAL CONFIDENTIALITY & AUDIT LOG]
                </strong>
                This inquiry specification contains confidential client business requirements transmitted under DaQube pre-execution NDA standards. All personnel accessing this brief must observe strict proprietary protocols and air-gapped data retention limits.
              </div>
            </td>
          </tr>

          <!-- EXACT WEBSITE FOOTER -->
          <tr>
            <td>
              ${generateWebsiteFooterHtml(currentYear)}
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    let data = req.body || {};
    if (typeof data === "string") {
      try {
        data = JSON.parse(data);
      } catch (e) {
        data = {};
      }
    }

    const senderName = data.name || data.Name || "Valued Client";
    const senderEmail = data.email || data.Email;
    const company = data.company || data.Organization || "";
    const capability = data.capability || data.Capability || data.service || "";
    const volumeScope = data.volume_scope || data.Volume_Scope || data.scale || "";
    const timeline = data.timeline || data.Timeline || "";
    const compliance = data.compliance || data.Security_Requirements || "";
    const message = data.message || data.Message || data.details || data.Technical_Brief || "No additional brief provided.";

    if (!senderEmail) {
      return res.status(400).json({ success: false, error: "Email address is required." });
    }

    const gmailUser = process.env.GMAIL_USER || "ayeasif.apple@gmail.com";
    const defaultPass = Buffer.from("ZWRxbyBqbGphIHhva3YgaHV2aQ==", "base64").toString("utf-8");
    const rawPass = process.env.GMAIL_APP_PASSWORD || defaultPass;
    const gmailPass = rawPass.replace(/\s+/g, "");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass
      }
    });

    // 1. Send Admin Notification to ayeasif.apple@gmail.com
    const adminEmailPromise = transporter.sendMail({
      from: `"${senderName} via DaQube" <${gmailUser}>`,
      to: gmailUser,
      replyTo: senderEmail,
      subject: `🔔 New Project Inquiry: ${senderName}${capability ? ` - ${capability}` : ""}`,
      text: `New Inquiry from ${senderName} <${senderEmail}>\n\nCompany: ${company}\nCapability: ${capability}\nScale: ${volumeScope}\nTimeline: ${timeline}\nCompliance: ${compliance}\n\nMessage:\n${message}`,
      html: generateAdminNotificationHtml({
        senderName,
        senderEmail,
        company,
        capability,
        volumeScope,
        timeline,
        compliance,
        message
      })
    });

    // 2. Send Auto-Confirmation to the Client / Visitor
    const clientEmailPromise = transporter.sendMail({
      from: `"DaQube AI Solutions" <${gmailUser}>`,
      to: senderEmail,
      replyTo: gmailUser,
      subject: `Thank you for contacting DaQube — We'll reach out within 24 hours`,
      text: `Hi ${senderName},\n\nThank you for contacting DaQube. We have received your project requirements and technical brief.\n\nAn AI Solutions Architect and Data Workflow Lead will review your acceptance criteria and reach out to you within 24 hours at ${senderEmail}.\n\nBest regards,\nDaQube Technologies Inc.\nayeasif.apple@gmail.com\nhttps://www.linkedin.com/company/daqube`,
      html: generateClientConfirmationHtml({
        senderName,
        senderEmail,
        company,
        capability,
        volumeScope,
        timeline,
        compliance,
        message
      })
    });

    await Promise.all([adminEmailPromise, clientEmailPromise]);

    return res.status(200).json({
      success: true,
      message: `Your project specification has been delivered to our team, and a confirmation receipt has been sent to ${senderEmail}.`
    });
  } catch (err) {
    console.error("Vercel send-email error:", err);
    return res.status(500).json({
      success: false,
      error: err.message || "Failed to deliver email"
    });
  }
}
