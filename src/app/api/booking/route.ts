import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { BookingFormData, rooms } from '@/lib/booking-data';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

const MONTHS_DE = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
];

const DAYS_DE = [
  'Sonntag', 'Montag', 'Dienstag', 'Mittwoch',
  'Donnerstag', 'Freitag', 'Samstag',
];

function formatDateDE(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return `${d.getDate()}. ${MONTHS_DE[d.getMonth()]} ${d.getFullYear()}`;
}

function formatDateDEWithDay(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return `${DAYS_DE[d.getDay()]}, ${d.getDate()}. ${MONTHS_DE[d.getMonth()]} ${d.getFullYear()}`;
}

function calculateNights(checkIn: string, checkOut: string): number {
  const start = new Date(checkIn + 'T00:00:00');
  const end = new Date(checkOut + 'T00:00:00');
  return Math.max(1, Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
}

function resolveRoomNames(selectedRooms: string[]): string[] {
  return selectedRooms.map((id) => {
    const room = rooms.find((r) => r.id === id);
    return room ? room.title : id;
  });
}

function buildNotificationEmail(data: BookingFormData): string {
  const nights = calculateNights(data.checkIn, data.checkOut);
  const roomNames = resolveRoomNames(data.selectedRooms);
  const extras: string[] = [];
  if (data.breakfast) extras.push('Frühstück gewünscht');
  if (data.parking) extras.push('Parkplatz gewünscht');

  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#F5F0E8;font-family:Georgia,'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F0E8;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr><td style="background-color:#4A4239;padding:28px 32px;">
          <h1 style="margin:0;color:#F5F0E8;font-size:22px;font-weight:normal;letter-spacing:0.5px;">Neue Buchungsanfrage</h1>
          <p style="margin:6px 0 0;color:#C4B9A8;font-size:14px;">${formatDateDEWithDay(new Date().toISOString().split('T')[0])}</p>
        </td></tr>

        <!-- Guest Info -->
        <tr><td style="padding:28px 32px 0;">
          <h2 style="margin:0 0 16px;color:#4A4239;font-size:16px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #8B9E8B;padding-bottom:8px;">Gast</h2>
          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:15px;color:#4A4239;">
            <tr><td style="padding:6px 0;width:140px;color:#8B9E8B;vertical-align:top;">Name</td><td style="padding:6px 0;font-weight:bold;">${data.firstName} ${data.lastName}</td></tr>
            <tr><td style="padding:6px 0;color:#8B9E8B;vertical-align:top;">E-Mail</td><td style="padding:6px 0;"><a href="mailto:${data.email}" style="color:#4A4239;">${data.email}</a></td></tr>
            ${data.phone ? `<tr><td style="padding:6px 0;color:#8B9E8B;vertical-align:top;">Telefon</td><td style="padding:6px 0;"><a href="tel:${data.phone}" style="color:#4A4239;">${data.phone}</a></td></tr>` : ''}
            ${data.street ? `<tr><td style="padding:6px 0;color:#8B9E8B;vertical-align:top;">Adresse</td><td style="padding:6px 0;">${data.street}<br>${data.zipCity}${data.country && data.country !== 'Deutschland' ? `<br>${data.country}` : ''}</td></tr>` : ''}
          </table>
        </td></tr>

        <!-- Booking Details -->
        <tr><td style="padding:28px 32px 0;">
          <h2 style="margin:0 0 16px;color:#4A4239;font-size:16px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #8B9E8B;padding-bottom:8px;">Aufenthalt</h2>
          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:15px;color:#4A4239;">
            <tr><td style="padding:6px 0;width:140px;color:#8B9E8B;vertical-align:top;">Anreise</td><td style="padding:6px 0;font-weight:bold;">${formatDateDEWithDay(data.checkIn)}</td></tr>
            <tr><td style="padding:6px 0;color:#8B9E8B;vertical-align:top;">Abreise</td><td style="padding:6px 0;font-weight:bold;">${formatDateDEWithDay(data.checkOut)}</td></tr>
            <tr><td style="padding:6px 0;color:#8B9E8B;vertical-align:top;">Nächte</td><td style="padding:6px 0;">${nights} ${nights === 1 ? 'Nacht' : 'Nächte'}</td></tr>
            <tr><td style="padding:6px 0;color:#8B9E8B;vertical-align:top;">Personen</td><td style="padding:6px 0;">${data.adults} ${data.adults === 1 ? 'Erwachsener' : 'Erwachsene'}${data.children > 0 ? `, ${data.children} ${data.children === 1 ? 'Kind' : 'Kinder'}` : ''}</td></tr>
            <tr><td style="padding:6px 0;color:#8B9E8B;vertical-align:top;">Zimmer</td><td style="padding:6px 0;font-weight:bold;">${roomNames.join(', ')}</td></tr>
            ${extras.length > 0 ? `<tr><td style="padding:6px 0;color:#8B9E8B;vertical-align:top;">Extras</td><td style="padding:6px 0;">${extras.join(', ')}</td></tr>` : ''}
          </table>
        </td></tr>

        <!-- Special Requests -->
        ${data.specialRequests ? `
        <tr><td style="padding:28px 32px 0;">
          <h2 style="margin:0 0 16px;color:#4A4239;font-size:16px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #8B9E8B;padding-bottom:8px;">Sonderwünsche</h2>
          <p style="margin:0;font-size:15px;color:#4A4239;line-height:1.6;background:#F5F0E8;padding:16px;border-radius:6px;border-left:3px solid #8B9E8B;">${data.specialRequests.replace(/\n/g, '<br>')}</p>
        </td></tr>` : ''}

        <!-- Footer -->
        <tr><td style="padding:28px 32px;">
          <p style="margin:0;font-size:13px;color:#999;text-align:center;border-top:1px solid #eee;padding-top:20px;">
            Diese Anfrage wurde über das Buchungsformular auf dasgaestehaus-eimeldingen.de gesendet.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildConfirmationEmail(data: BookingFormData): string {
  const nights = calculateNights(data.checkIn, data.checkOut);
  const roomNames = resolveRoomNames(data.selectedRooms);
  const extras: string[] = [];
  if (data.breakfast) extras.push('Frühstück');
  if (data.parking) extras.push('Parkplatz');

  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#F5F0E8;font-family:Georgia,'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F0E8;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr><td style="background-color:#8B9E8B;padding:36px 32px;text-align:center;">
          <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:normal;letter-spacing:0.5px;">Das Gästehaus</h1>
          <p style="margin:4px 0 0;color:rgba(255,255,255,0.85);font-size:14px;letter-spacing:2px;text-transform:uppercase;">Eimeldingen</p>
        </td></tr>

        <!-- Greeting -->
        <tr><td style="padding:32px 32px 0;">
          <p style="margin:0 0 8px;font-size:17px;color:#4A4239;line-height:1.7;">
            Guten Tag ${data.firstName} ${data.lastName},
          </p>
          <p style="margin:0;font-size:15px;color:#4A4239;line-height:1.7;">
            vielen Dank für Ihre Buchungsanfrage! Wir haben folgende Angaben erhalten:
          </p>
        </td></tr>

        <!-- Booking Summary -->
        <tr><td style="padding:24px 32px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F0E8;border-radius:8px;overflow:hidden;">
            <tr><td style="padding:20px 24px;">
              <h2 style="margin:0 0 16px;color:#4A4239;font-size:15px;text-transform:uppercase;letter-spacing:1px;">Ihre Anfrage im Überblick</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#4A4239;">
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(74,66,57,0.1);color:#8B9E8B;width:120px;vertical-align:top;">Anreise</td>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(74,66,57,0.1);font-weight:bold;">${formatDateDE(data.checkIn)}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(74,66,57,0.1);color:#8B9E8B;vertical-align:top;">Abreise</td>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(74,66,57,0.1);font-weight:bold;">${formatDateDE(data.checkOut)}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(74,66,57,0.1);color:#8B9E8B;vertical-align:top;">Dauer</td>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(74,66,57,0.1);">${nights} ${nights === 1 ? 'Nacht' : 'Nächte'}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(74,66,57,0.1);color:#8B9E8B;vertical-align:top;">Personen</td>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(74,66,57,0.1);">${data.adults} ${data.adults === 1 ? 'Erwachsener' : 'Erwachsene'}${data.children > 0 ? `, ${data.children} ${data.children === 1 ? 'Kind' : 'Kinder'}` : ''}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;${extras.length > 0 ? 'border-bottom:1px solid rgba(74,66,57,0.1);' : ''}color:#8B9E8B;vertical-align:top;">Zimmer</td>
                  <td style="padding:8px 0;${extras.length > 0 ? 'border-bottom:1px solid rgba(74,66,57,0.1);' : ''}font-weight:bold;">${roomNames.join(', ')}</td>
                </tr>
                ${extras.length > 0 ? `<tr>
                  <td style="padding:8px 0;color:#8B9E8B;vertical-align:top;">Extras</td>
                  <td style="padding:8px 0;">${extras.join(', ')}</td>
                </tr>` : ''}
              </table>
            </td></tr>
          </table>
        </td></tr>

        <!-- Next Steps -->
        <tr><td style="padding:0 32px 24px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#4A4239;border-radius:8px;overflow:hidden;">
            <tr><td style="padding:20px 24px;text-align:center;">
              <p style="margin:0;color:#F5F0E8;font-size:15px;line-height:1.6;">
                Wir melden uns innerhalb von <strong>24 Stunden</strong> bei Ihnen, um<br>Ihre Anfrage zu bestätigen und offene Fragen zu klären.
              </p>
            </td></tr>
          </table>
        </td></tr>

        <!-- Contact Info -->
        <tr><td style="padding:0 32px 32px;">
          <p style="margin:0 0 12px;font-size:15px;color:#4A4239;line-height:1.7;">
            Bei Fragen erreichen Sie uns jederzeit:
          </p>
          <table cellpadding="0" cellspacing="0" style="font-size:14px;color:#4A4239;">
            <tr><td style="padding:3px 12px 3px 0;color:#8B9E8B;">Telefon</td><td style="padding:3px 0;"><a href="tel:+4976214248233" style="color:#4A4239;text-decoration:none;">+49 (0) 7621 4 24 82 33</a></td></tr>
            <tr><td style="padding:3px 12px 3px 0;color:#8B9E8B;">E-Mail</td><td style="padding:3px 0;"><a href="mailto:info@dasgaestehaus-eimeldingen.de" style="color:#4A4239;text-decoration:none;">info@dasgaestehaus-eimeldingen.de</a></td></tr>
            <tr><td style="padding:3px 12px 3px 0;color:#8B9E8B;">Adresse</td><td style="padding:3px 0;">Haltinger Weg 3, 79591 Eimeldingen</td></tr>
          </table>
        </td></tr>

        <!-- Closing -->
        <tr><td style="padding:0 32px 32px;">
          <p style="margin:0;font-size:15px;color:#4A4239;line-height:1.7;">
            Herzliche Grüße<br>
            <strong style="color:#8B9E8B;">Ihr Team vom Gästehaus Eimeldingen</strong>
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background-color:#F5F0E8;padding:20px 32px;text-align:center;">
          <p style="margin:0;font-size:12px;color:#999;line-height:1.6;">
            Das Gästehaus Eimeldingen &middot; Haltinger Weg 3 &middot; 79591 Eimeldingen<br>
            Diese E-Mail wurde automatisch versendet. Bitte antworten Sie nicht direkt auf diese Nachricht.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const data: BookingFormData = await request.json();

    // Validate required fields
    if (
      !data.checkIn ||
      !data.checkOut ||
      !data.selectedRooms?.length ||
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.privacyConsent
    ) {
      return NextResponse.json(
        { error: 'Pflichtfelder fehlen' },
        { status: 400 }
      );
    }

    const resend = getResend();

    // Send notification email to guesthouse
    await resend.emails.send({
      from: 'Buchungsanfrage <buchung@dasgaestehaus-eimeldingen.de>',
      to: 'info@dasgaestehaus-eimeldingen.de',
      subject: `Neue Buchungsanfrage von ${data.firstName} ${data.lastName}`,
      html: buildNotificationEmail(data),
    });

    // Send confirmation email to guest
    await resend.emails.send({
      from: 'Das Gästehaus Eimeldingen <info@dasgaestehaus-eimeldingen.de>',
      to: data.email,
      subject: 'Ihre Buchungsanfrage – Das Gästehaus Eimeldingen',
      html: buildConfirmationEmail(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Fehler beim Senden der Anfrage' },
      { status: 500 }
    );
  }
}
