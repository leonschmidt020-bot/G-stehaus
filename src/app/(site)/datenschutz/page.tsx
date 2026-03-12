export default function DatenschutzPage() {
  return (
    <section className="py-[clamp(3rem,8vh,5rem)]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-serif text-[var(--color-primary)] mb-8">Datenschutzerklärung</h1>

        <div className="space-y-8 text-[var(--color-text)] font-light leading-relaxed text-[15px]">

          {/* 1. Datenschutz auf einen Blick */}
          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1 mt-4">Allgemeine Hinweise</h3>
            <p className="mb-3">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>
            <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1 mt-4">Datenerfassung auf unserer Website</h3>
            <p className="mb-3">
              <strong className="text-[var(--color-primary)]">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p className="mb-3">
              <strong className="text-[var(--color-primary)]">Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
              Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.
              Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
              sobald Sie unsere Website betreten.
            </p>
            <p className="mb-3">
              <strong className="text-[var(--color-primary)]">Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website
              zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            <p>
              <strong className="text-[var(--color-primary)]">Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
              ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit
              unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht
              Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </div>

          {/* 2. Allgemeine Hinweise und Pflichtinformationen */}
          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1 mt-4">Datenschutz</h3>
            <p className="mb-3">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mb-3">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
              Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür
              wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p className="mb-3">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der
              Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser
              Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
            <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1 mt-4">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-3">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mb-3">
              Hierholzer GmbH &amp; Co. KG<br />
              Haltinger Weg 3<br />
              79591 Eimeldingen<br />
              Telefon: +49 (0) 7621 4 24 82 33<br />
              E-Mail: info@dasgaestehaus-eimeldingen.de
            </p>
            <p className="mb-3">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein
              oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
              personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
            <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1 mt-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="mb-3">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
              Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine
              formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf
              erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
            <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1 mt-4">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p className="mb-3">
              Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht
              bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in
              datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes,
              in dem unser Unternehmen seinen Sitz hat.
            </p>
            <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1 mt-4">Recht auf Datenübertragbarkeit</h3>
            <p className="mb-3">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung
              eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem
              gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte
              Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
              soweit es technisch machbar ist.
            </p>
            <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1 mt-4">SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="mb-3">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an
              uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
              verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers
              von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p className="mb-3">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie
              an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>
            <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1 mt-4">Auskunft, Sperrung, Löschung</h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht
              auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
              Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
              Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen
              zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum
              angegebenen Adresse an uns wenden.
            </p>
          </div>

          {/* 3. Datenerfassung auf unserer Website */}
          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">3. Datenerfassung auf unserer Website</h2>
            <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1 mt-4">Cookies</h3>
            <p className="mb-3">
              Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf
              Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu,
              unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind
              kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
            </p>
            <p className="mb-3">
              Die meisten der von uns verwendeten Cookies sind so genannte &quot;Session-Cookies&quot;.
              Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben
              auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es
              uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
            </p>
            <p className="mb-3">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies
              informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies
              für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der
              Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies
              kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
            <p>
              Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur
              Bereitstellung bestimmter, von Ihnen erwünschter Funktionen erforderlich sind,
              werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber
              hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch
              fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies
              (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese
              in dieser Datenschutzerklärung gesondert behandelt.
            </p>
          </div>

          {/* 4. Server-Log-Dateien */}
          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">4. Server-Log-Dateien</h2>
            <p className="mb-3">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so
              genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-5 mb-3 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die
              Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
            </p>
          </div>

          {/* 5. Kontaktformular */}
          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">5. Kontaktformular</h2>
            <p className="mb-3">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
              aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit
              ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose
              Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
            </p>
          </div>

          {/* 6. Analyse Tools und Werbung */}
          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">6. Analyse-Tools und Werbung</h2>
            <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1 mt-4">Google Analytics</h3>
            <p className="mb-3">
              Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter
              ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
            </p>
            <p className="mb-3">
              Google Analytics verwendet so genannte &quot;Cookies&quot;. Das sind Textdateien, die auf
              Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website
              durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre
              Benutzung dieser Website werden in der Regel an einen Server von Google in den USA
              übertragen und dort gespeichert.
            </p>
            <p className="mb-3">
              Die Speicherung von Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der
              Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren.
            </p>
            <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1 mt-4">IP-Anonymisierung</h3>
            <p className="mb-3">
              Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird
              Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder
              in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor
              der Übermittlung in die USA gekürzt.
            </p>
            <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1 mt-4">Browser Plugin</h3>
            <p className="mb-3">
              Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer
              Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem
              Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden
              nutzen können. Sie können darüber hinaus die Erfassung der durch den Cookie erzeugten
              und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google
              sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem
              folgenden Link verfügbare Browser-Plugin herunterladen und installieren.
            </p>
            <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1 mt-4">Widerspruch gegen Datenerfassung</h3>
            <p className="mb-3">
              Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie
              auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung
              Ihrer Daten bei zukünftigen Besuchen dieser Website verhindert.
            </p>
            <p>
              Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in
              der Datenschutzerklärung von Google.
            </p>
          </div>

          {/* 7. Google Analytics Remarketing */}
          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">7. Google Analytics Remarketing</h2>
            <p className="mb-3">
              Unsere Websites nutzen die Funktionen von Google Analytics Remarketing in Verbindung
              mit den geräteübergreifenden Funktionen von Google AdWords und Google DoubleClick.
              Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
            </p>
            <p className="mb-3">
              Diese Funktion ermöglicht es, die mit Google Analytics Remarketing erstellten
              Werbe-Zielgruppen mit den geräteübergreifenden Funktionen von Google AdWords und
              Google DoubleClick zu verknüpfen. Auf diese Weise können interessenbezogene,
              personalisierte Werbebotschaften, die in Abhängigkeit Ihres früheren Nutzungs- und
              Surfverhaltens auf einem Endgerät (z.B. Handy) an Sie angepasst wurden, auch auf
              einem anderen Ihrer Endgeräte (z.B. Tablet oder PC) angezeigt werden.
            </p>
            <p>
              Haben Sie eine entsprechende Einwilligung erteilt, verknüpft Google zu diesem Zweck
              Ihren Web- und App-Browserverlauf mit Ihrem Google-Konto. Auf diese Weise können auf
              jedem Endgerät, auf dem Sie sich mit Ihrem Google-Konto anmelden, dieselben
              personalisierten Werbebotschaften geschaltet werden.
            </p>
          </div>

          {/* 8. Google AdWords und Google Conversion-Tracking */}
          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">8. Google AdWords und Google Conversion-Tracking</h2>
            <p className="mb-3">
              Diese Website verwendet Google AdWords. AdWords ist ein Online-Werbeprogramm der
              Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, United States (&quot;Google&quot;).
            </p>
            <p className="mb-3">
              Im Rahmen von Google AdWords nutzen wir das so genannte Conversion-Tracking. Wenn
              Sie auf eine von Google geschaltete Anzeige klicken, wird ein Cookie für das
              Conversion-Tracking gesetzt. Bei Cookies handelt es sich um kleine Textdateien,
              die der Internet-Browser auf dem Computer des Nutzers ablegt. Diese Cookies verlieren
              nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen Identifizierung der Nutzer.
            </p>
            <p>
              Besucht der Nutzer bestimmte Seiten dieser Website und das Cookie ist noch nicht
              abgelaufen, können Google und wir erkennen, dass der Nutzer auf die Anzeige geklickt
              hat und zu dieser Seite weitergeleitet wurde.
            </p>
          </div>

          {/* 9. Facebook Pixel */}
          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">9. Facebook Pixel</h2>
            <p className="mb-3">
              Unsere Website nutzt zur Konversionsmessung das Besucheraktions-Pixel von Facebook,
              Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA (&quot;Facebook&quot;).
            </p>
            <p className="mb-3">
              So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch
              Klick auf eine Facebook-Werbeanzeige auf die Website des Anbieters weitergeleitet
              wurden. Dadurch können die Wirksamkeit der Facebook-Werbeanzeigen für statistische
              und Marktforschungszwecke ausgewertet werden und zukünftige Werbemaßnahmen optimiert werden.
            </p>
            <p>
              Die erhobenen Daten sind für uns als Betreiber dieser Website anonym, wir können
              keine Rückschlüsse auf die Identität der Nutzer ziehen. Die Daten werden aber von
              Facebook gespeichert und verarbeitet, sodass eine Verbindung zum jeweiligen
              Nutzerprofil möglich ist und Facebook die Daten für eigene Werbezwecke, entsprechend
              der Facebook-Datenverwendungsrichtlinie verwenden kann.
            </p>
          </div>

          {/* 10. Plugins und Tools */}
          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">10. Plugins und Tools</h2>
            <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1 mt-4">Google Web Fonts</h3>
            <p className="mb-3">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web
              Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr
              Browser die benötigten Web Fonts in Ihren Browsercache, um Texte und Schriftarten
              korrekt anzuzeigen.
            </p>
            <p className="mb-3">
              Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern
              von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre
              IP-Adresse unsere Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt
              im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote.
              Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
            </p>
            <h3 className="font-medium text-[var(--color-primary)] text-sm mb-1 mt-4">Google Maps</h3>
            <p>
              Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die
              Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Zur Nutzung
              der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese
              Informationen werden in der Regel an einen Server von Google in den USA übertragen
              und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese
              Datenübertragung. Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden
              Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns
              auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von
              Art. 6 Abs. 1 lit. f DSGVO dar.
            </p>
          </div>

          {/* 11. Zahlungsanbieter */}
          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">11. Zahlungsanbieter</h2>
            <p>
              Wir akzeptieren Zahlungen in bar, per EC-Karte und per Kreditkarte.
              Bei der Zahlung per EC- oder Kreditkarte werden die zur Zahlungsabwicklung
              notwendigen Daten an den jeweiligen Zahlungsdienstleister übermittelt. Dies
              erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Erfüllung des
              zwischen Ihnen und uns bestehenden Vertragsverhältnisses.
            </p>
          </div>

          {/* 12. Änderung der Datenschutzerklärung */}
          <div>
            <h2 className="font-medium text-[var(--color-primary)] mb-2">12. Änderung dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
              aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen
              in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die
              neue Datenschutzerklärung.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
