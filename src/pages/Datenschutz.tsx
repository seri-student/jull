import React from 'react';

const Datenschutz: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9)' }}>
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-gray-200">
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-medium mb-3 text-gray-100">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
              Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
            
            <h3 className="text-xl font-medium mb-3 text-gray-100">Datenerfassung auf dieser Website</h3>
            <p className="mb-3"><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
            </p>
            
            <p className="mb-3"><strong>Wie erfassen wir Ihre Daten?</strong></p>
            <p className="mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. 
              um Daten handeln, die Sie in ein Kontaktformular eingeben oder bei der Nutzung von Calendly für 
              Terminbuchungen.
            </p>
            <p className="mb-4">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
              IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder 
              Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>
          </section>

          <section className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Hosting</h2>
            <p className="mb-4">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            
            <h3 className="text-xl font-medium mb-3 text-gray-100">Externes Hosting</h3>
            <p className="mb-4">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
              werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, 
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe 
              und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="mb-4">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und 
              bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und 
              effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-medium mb-3 text-gray-100">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
              dieser Datenschutzerklärung.
            </p>
            
            <h3 className="text-xl font-medium mb-3 text-gray-100">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="bg-gray-800/50 p-4 rounded mb-4">
              <p>Julin Design</p>
              <p>Julian Müller</p>
              <p>Musterstraße 123</p>
              <p>12345 Berlin</p>
              <p>Deutschland</p>
              <p>Telefon: +49 (0) 30 12345678</p>
              <p>E-Mail: info@julindesign.de</p>
            </div>
            
            <h3 className="text-xl font-medium mb-3 text-gray-100">Speicherdauer</h3>
            <p className="mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben 
              Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein 
              berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, 
              werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung 
              Ihrer personenbezogenen Daten haben.
            </p>
          </section>

          <section className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-medium mb-3 text-gray-100">Cookies</h3>
            <p className="mb-4">
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf 
              Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung 
              (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
            </p>
            <p className="mb-4">
              Teilweise dienen die Cookies dazu, Ihnen die Bedienung der Website zu erleichtern (z. B. durch Speicherung 
              Ihrer Cookie-Präferenzen). Andere Cookies ermöglichen es uns, verschiedene Funktionen anzubieten oder 
              Analysezwecke durchzuführen.
            </p>
            
            <h3 className="text-xl font-medium mb-3 text-gray-100">Server-Log-Dateien</h3>
            <p className="mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mb-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser 
              Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Plugins und Tools</h2>
            
            <h3 className="text-xl font-medium mb-3 text-gray-100">Google Fonts (lokales Hosting)</h3>
            <p className="mb-4">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von 
              Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern 
              von Google findet dabei nicht statt.
            </p>
            
            <h3 className="text-xl font-medium mb-3 text-gray-100">Calendly</h3>
            <p className="mb-4">
              Wir verwenden auf dieser Website Calendly, einen Dienst der Calendly LLC, 271 17th St NW, Atlanta, 
              GA 30363, USA. Calendly ermöglicht es Ihnen, Termine mit uns zu vereinbaren.
            </p>
            <p className="mb-4">
              Wenn Sie das Calendly-Widget verwenden, werden Ihre IP-Adresse und weitere technische Informationen 
              an die Server von Calendly in den USA übertragen. Die Datenübertragung erfolgt auf Grundlage Ihrer 
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
            <p className="mb-4">
              Weitere Informationen finden Sie in der Datenschutzerklärung von Calendly: 
              <a href="https://calendly.com/privacy" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-blue-400 hover:text-blue-300 ml-1 underline">
                https://calendly.com/privacy
              </a>
            </p>
          </section>

          <section className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Ihre Rechte</h2>
            <p className="mb-4">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
              oder Löschung dieser Daten zu verlangen.
            </p>
            
            <h3 className="text-xl font-medium mb-3 text-gray-100">Auskunft, Löschung und Berichtigung</h3>
            <p className="mb-4">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche 
              Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den 
              Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
            </p>
            
            <h3 className="text-xl font-medium mb-3 text-gray-100">Einschränkung der Verarbeitung</h3>
            <p className="mb-4">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
              Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht 
              in folgenden Fällen:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten</li>
              <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht</li>
              <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen</li>
              <li>Wenn Sie Widerspruch gegen die Verarbeitung eingelegt haben</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-3 text-gray-100">Widerspruch gegen Werbe-E-Mails</h3>
            <p className="mb-4">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von 
              nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. 
              Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten 
              Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </section>

          <section className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Kontakt</h2>
            <p className="mb-4">
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, 
              Berichtigung, Sperrung oder Löschung von Daten sowie Widerruf erteilter Einwilligungen wenden Sie 
              sich bitte an:
            </p>
            <div className="bg-gray-800/50 p-4 rounded">
              <p>Julin Design</p>
              <p>Julian Müller</p>
              <p>E-Mail: datenschutz@julindesign.de</p>
              <p>Telefon: +49 (0) 30 12345678</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;