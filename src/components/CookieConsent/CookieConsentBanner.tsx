import React, { useEffect, useState } from 'react';
import { setCookie, getCookie } from '../../utils/cookieUtils';
import { Settings, X } from 'lucide-react';

interface CookieConsentBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

interface CookieSettings {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

type Language = 'de' | 'en';

const translations = {
  de: {
    title: 'Cookie-Einstellungen',
    description: 'Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Einige Cookies sind für die Funktionalität der Website erforderlich, während andere uns helfen, die Website zu verbessern.',
    essential: 'Erforderliche Cookies',
    essentialDesc: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.',
    functional: 'Funktionale Cookies',
    functionalDesc: 'Diese Cookies ermöglichen erweiterte Funktionen wie Calendly-Buchungen und eingebettete Videos.',
    analytics: 'Analyse-Cookies',
    analyticsDesc: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.',
    marketing: 'Marketing-Cookies',
    marketingDesc: 'Diese Cookies werden verwendet, um Ihnen relevante Werbung zu zeigen.',
    acceptAll: 'Alle akzeptieren',
    acceptSelected: 'Auswahl akzeptieren',
    declineAll: 'Alle ablehnen',
    settings: 'Einstellungen',
    close: 'Schließen',
    save: 'Speichern',
    moreInfo: 'Weitere Informationen',
    privacyPolicy: 'Datenschutzerklärung',
    language: 'Sprache',
    cookiePolicy: 'Cookie-Richtlinie'
  },
  en: {
    title: 'Cookie Settings',
    description: 'We use cookies to provide you with the best possible experience on our website. Some cookies are necessary for the website to function, while others help us improve the website.',
    essential: 'Essential Cookies',
    essentialDesc: 'These cookies are required for basic website functionality and cannot be disabled.',
    functional: 'Functional Cookies',
    functionalDesc: 'These cookies enable advanced features like Calendly bookings and embedded videos.',
    analytics: 'Analytics Cookies',
    analyticsDesc: 'These cookies help us understand how visitors interact with our website.',
    marketing: 'Marketing Cookies',
    marketingDesc: 'These cookies are used to show you relevant advertising.',
    acceptAll: 'Accept All',
    acceptSelected: 'Accept Selected',
    declineAll: 'Decline All',
    settings: 'Settings',
    close: 'Close',
    save: 'Save',
    moreInfo: 'More Information',
    privacyPolicy: 'Privacy Policy',
    language: 'Language',
    cookiePolicy: 'Cookie Policy'
  }
};

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [language, setLanguage] = useState<Language>('de');
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>({
    essential: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  const t = translations[language];

  useEffect(() => {
    const consent = getCookie('cookie_consent');
    const savedLanguage = getCookie('cookie_language') as Language;
    
    if (savedLanguage && (savedLanguage === 'de' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
    
    if (consent === null) {
      setIsVisible(true);
    } else if (consent === 'accepted') {
      const settings = getCookie('cookie_settings');
      if (settings) {
        try {
          const parsedSettings = JSON.parse(settings);
          setCookieSettings(parsedSettings);
          if (parsedSettings.functional || parsedSettings.analytics || parsedSettings.marketing) {
            onAccept();
          } else {
            onDecline();
          }
        } catch {
          onDecline();
        }
      } else {
        onAccept();
      }
    } else {
      onDecline();
    }
  }, [onAccept, onDecline]);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    
    setCookie('cookie_consent', 'accepted', 365);
    setCookie('cookie_settings', JSON.stringify(allAccepted), 365);
    setCookie('cookie_language', language, 365);
    setIsVisible(false);
    setShowSettings(false);
    onAccept();
  };

  const handleDeclineAll = () => {
    const onlyEssential = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    
    setCookie('cookie_consent', 'declined', 365);
    setCookie('cookie_settings', JSON.stringify(onlyEssential), 365);
    setCookie('cookie_language', language, 365);
    setIsVisible(false);
    setShowSettings(false);
    onDecline();
  };

  const handleAcceptSelected = () => {
    setCookie('cookie_consent', 'accepted', 365);
    setCookie('cookie_settings', JSON.stringify(cookieSettings), 365);
    setCookie('cookie_language', language, 365);
    setIsVisible(false);
    setShowSettings(false);
    
    if (cookieSettings.functional || cookieSettings.analytics || cookieSettings.marketing) {
      onAccept();
    } else {
      onDecline();
    }
  };

  const handleSettingChange = (setting: keyof CookieSettings) => {
    if (setting === 'essential') return; // Essential cookies cannot be disabled
    
    setCookieSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setCookie('cookie_language', newLanguage, 365);
  };

  // Global function to reopen cookie settings
  useEffect(() => {
    window.openCookieSettings = () => {
      setIsVisible(true);
      setShowSettings(true);
    };
    
    return () => {
      delete window.openCookieSettings;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">{t.title}</h2>
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="flex bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => handleLanguageChange('de')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'de' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
            
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label={t.settings}
            >
              <Settings size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-300 mb-6 leading-relaxed">
            {t.description}
          </p>

          {/* Cookie Categories */}
          {showSettings && (
            <div className="space-y-4 mb-6">
              {/* Essential Cookies */}
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white">{t.essential}</h3>
                  <div className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                    {language === 'de' ? 'Erforderlich' : 'Required'}
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-3">{t.essentialDesc}</p>
              </div>

              {/* Functional Cookies */}
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white">{t.functional}</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cookieSettings.functional}
                      onChange={() => handleSettingChange('functional')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-400">{t.functionalDesc}</p>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white">{t.analytics}</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cookieSettings.analytics}
                      onChange={() => handleSettingChange('analytics')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-400">{t.analyticsDesc}</p>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white">{t.marketing}</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cookieSettings.marketing}
                      onChange={() => handleSettingChange('marketing')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-400">{t.marketingDesc}</p>
              </div>
            </div>
          )}

          {/* Privacy Policy Link */}
          <div className="mb-6">
            <a 
              href="/datenschutz" 
              className="text-blue-400 hover:text-blue-300 text-sm underline"
            >
              {t.privacyPolicy}
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAcceptAll}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              {t.acceptAll}
            </button>
            
            {showSettings && (
              <button
                onClick={handleAcceptSelected}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                {t.acceptSelected}
              </button>
            )}
            
            <button
              onClick={handleDeclineAll}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              {t.declineAll}
            </button>
          </div>

          {!showSettings && (
            <button
              onClick={() => setShowSettings(true)}
              className="w-full mt-3 text-gray-400 hover:text-white text-sm underline"
            >
              {t.settings}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;