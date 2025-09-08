import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageToggle from '@/components/LanguageToggle';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://abicus.com';
  
  return {
    title: locale === 'fi' ? 'Ohje ja Vinkit - Abicus Tieteislaskin' : 'Help & Tips - Abicus Scientific Calculator',
    description: locale === 'fi' 
      ? 'Opi käyttämään Abicus-laskinta tehokkaasti. Näppäimistöpikakuvakkeet, käytettävissä olevat funktiot ja profi vinkit.'
      : 'Learn how to use the Abicus calculator effectively. Keyboard shortcuts, available functions, and pro tips.',
    keywords: locale === 'fi'
      ? 'abicus ohje, laskimen käyttö, näppäimistöpikakuvakkeet, tieteislaskimen funktiot, laskimen vinkit'
      : 'abicus help, calculator usage, keyboard shortcuts, scientific calculator functions, calculator tips',
    alternates: {
      canonical: `${baseUrl}/${locale}/help`,
      languages: {
        'en': `${baseUrl}/en/help`,
        'fi': `${baseUrl}/fi/help`,
        'x-default': `${baseUrl}/en/help`,
      },
    },
    openGraph: {
      title: locale === 'fi' ? 'Ohje ja Vinkit - Abicus Tieteislaskin' : 'Help & Tips - Abicus Scientific Calculator',
      description: locale === 'fi'
        ? 'Opi käyttämään Abicus-laskinta tehokkaasti.'
        : 'Learn how to use the Abicus calculator effectively.',
      type: 'website',
      locale: locale === 'fi' ? 'fi_FI' : 'en_US',
      url: `${baseUrl}/${locale}/help`,
      siteName: 'Abicus Calculator',
    },
    twitter: {
      card: 'summary',
      title: locale === 'fi' ? 'Ohje ja Vinkit - Abicus Tieteislaskin' : 'Help & Tips - Abicus Scientific Calculator',
      description: locale === 'fi'
        ? 'Opi käyttämään Abicus-laskinta tehokkaasti.'
        : 'Learn how to use the Abicus calculator effectively.',
    },
  };
}

export default function HelpPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
              >
                {t('header.title')}
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-sm text-gray-600">{t('help.title')}</span>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            {t('help.title')}
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('help.gettingStarted.title')}
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">{t('help.gettingStarted.intro')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('help.gettingStarted.step1')}</li>
                  <li>{t('help.gettingStarted.step2')}</li>
                  <li>{t('help.gettingStarted.step3')}</li>
                  <li>{t('help.gettingStarted.step4')}</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('help.keyboardShortcuts.title')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {t('help.keyboardShortcuts.basic')}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">0-9</span>
                      <span className="text-gray-600">{t('help.keyboardShortcuts.numbers')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">+, -, *, /</span>
                      <span className="text-gray-600">{t('help.keyboardShortcuts.operators')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">Enter</span>
                      <span className="text-gray-600">{t('help.keyboardShortcuts.calculate')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">Escape</span>
                      <span className="text-gray-600">{t('help.keyboardShortcuts.clear')}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {t('help.keyboardShortcuts.advanced')}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">Backspace</span>
                      <span className="text-gray-600">{t('help.keyboardShortcuts.delete')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">.</span>
                      <span className="text-gray-600">{t('help.keyboardShortcuts.decimal')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('help.functions.title')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {t('help.functions.trigonometric')}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><strong>sin, cos, tan:</strong> {t('help.functions.trigDesc')}</li>
                    <li><strong>√:</strong> {t('help.functions.sqrtDesc')}</li>
                    <li><strong>x^y:</strong> {t('help.functions.powerDesc')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {t('help.functions.logarithmic')}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><strong>log:</strong> {t('help.functions.logDesc')}</li>
                    <li><strong>ln:</strong> {t('help.functions.lnDesc')}</li>
                    <li><strong>π:</strong> {t('help.functions.piDesc')}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('help.tips.title')}
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">💡</span>
                    {t('help.tips.tip1')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">💡</span>
                    {t('help.tips.tip2')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">💡</span>
                    {t('help.tips.tip3')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">💡</span>
                    {t('help.tips.tip4')}
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('help.about.title')}
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">{t('help.about.description1')}</p>
                <p className="mb-4">{t('help.about.description2')}</p>
                <p>{t('help.about.description3')}</p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              ← {t('help.backToCalculator')}
            </Link>
          </div>
        </div>

        {/* Advertisement Section */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div id="container-14a1101a1bad2ed5c4fca10d2ceba052"></div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/help" className="text-gray-500 hover:text-gray-900 text-sm">
                {t('footer.help')}
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-900 text-sm">
                {t('footer.privacy')}
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-900 text-sm">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}