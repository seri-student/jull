import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9)' }}>
          Impressum
        </h1>
        
        <div className="space-y-8 text-gray-200">
          <section className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-2">
              <p className="font-medium">Julin Design</p>
              <p>Julian Müller</p>
              <p>Musterstraße 123</p>
              <p>12345 Berlin</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">Kontakt</h2>
            <div className="space-y-2">
              <p><strong>Telefon:</strong> +49 (0) 30 12345678</p>
              <p><strong>E-Mail:</strong> info@julindesign.de</p>
              <p><strong>Website:</strong> www.julindesign.de</p>
            </div>
          </section>

          <section className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:</p>
            <p className="font-medium">DE123456789</p>
          </section>

          <section className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <div className="space-y-2">
              <p><strong>Berufsbezeichnung:</strong> Mediengestalter Digital und Print</p>
              <p><strong>Zuständige Kammer:</strong> Handwerkskammer Berlin</p>
              <p><strong>Verliehen in:</strong> Deutschland</p>
              <p><strong>Berufsrechtliche Regelungen:</strong> Handwerksordnung (HwO)</p>
              <p>Diese Regelungen sind einsehbar unter: 
                <a href="https://www.gesetze-im-internet.de/hwo/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-blue-400 hover:text-blue-300 ml-1 underline">
                  https://www.gesetze-im-internet.de/hwo/
                </a>
              </p>
            </div>
          </section>

          <section className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">EU-Streitschlichtung</h2>
            <p className="mb-3">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            </p>
            <p className="mb-3">
              <a href="https://ec.europa.eu/consumers/odr/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-blue-400 hover:text-blue-300 underline">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, 
              an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">Haftung für Inhalte</h2>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
              der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">Haftung für Links</h2>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche 
              Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht 
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-white">Urheberrecht</h2>
            <p className="mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p>
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. 
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
              Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
              auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei 
              Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;