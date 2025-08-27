export default async function handler(req, res) {
  const { page, date } = req.body;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer re_A7xcRCPV_9q8GH5SNE9HYH5oFRpuuG1ym',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'noreply@kaylon-school.com',
      to: 'morgane.girault@hotmail.fr',
      subject: `✅ Kaylon a terminé la page "${page}"`,
      html: `<p>Kaylon a terminé la page <strong>${page}</strong> le <strong>${date}</strong>.</p>`
    })
  });

  if (response.ok) {
    res.status(200).json({ status: 'sent' });
  } else {
    const error = await response.text();
    res.status(500).json({ error: 'Email not sent', details: error });
  }
}