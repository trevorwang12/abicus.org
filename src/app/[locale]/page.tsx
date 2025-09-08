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
    title: locale === 'fi' ? 'Abicus - Tieteislaskin Verkossa' : 'Abicus - Scientific Calculator Online',
    description: locale === 'fi' 
      ? 'Ilmainen verkossa toimiva tieteislaskin, joka perustuu suomalaiseen Abicus-laskimeen. Täydellinen matemaattisiin laskutoimituksiin, kotitehtäviin ja opetuskäyttöön.'
      : 'Free online scientific calculator based on the Finnish Abicus calculator. Perfect for mathematical calculations, homework, and educational purposes.',
    keywords: locale === 'fi'
      ? 'abicus, laskin, tieteislaskin, verkkolaskin, matikkalaskin, suomalainen laskin, opetuslaskin'
      : 'abicus, calculator, scientific calculator, online calculator, math calculator, Finnish calculator, educational calculator',
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'fi': `${baseUrl}/fi`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: locale === 'fi' ? 'Abicus - Tieteislaskin Verkossa' : 'Abicus - Scientific Calculator Online',
      description: locale === 'fi'
        ? 'Ilmainen verkossa toimiva tieteislaskin opetuskäyttöön.'
        : 'Free online scientific calculator for educational purposes.',
      type: 'website',
      locale: locale === 'fi' ? 'fi_FI' : 'en_US',
      url: `${baseUrl}/${locale}`,
      siteName: 'Abicus Calculator',
    },
    twitter: {
      card: 'summary',
      title: locale === 'fi' ? 'Abicus - Tieteislaskin Verkossa' : 'Abicus - Scientific Calculator Online',
      description: locale === 'fi'
        ? 'Ilmainen verkossa toimiva tieteislaskin opetuskäyttöön.'
        : 'Free online scientific calculator for educational purposes.',
    },
  };
}

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {t('header.title')}
              </div>
              <p className="text-sm text-gray-600">
                {t('header.subtitle')}
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-6">
                <Link href="#features" className="text-gray-600 hover:text-gray-900 text-sm">
                  {t('nav.features')}
                </Link>
                <Link href="#how-to-use" className="text-gray-600 hover:text-gray-900 text-sm">
                  {t('nav.howTo')}
                </Link>
                <Link href="#faq" className="text-gray-600 hover:text-gray-900 text-sm">
                  {t('nav.faq')}
                </Link>
                <Link href="/help" className="text-gray-600 hover:text-gray-900 text-sm">
                  {t('nav.help')}
                </Link>
              </nav>
              <LanguageToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#calculator" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                {t('hero.startCalculating')}
              </Link>
              <Link 
                href="#what-is-abicus" 
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                {t('hero.learnMore')}
              </Link>
            </div>
          </div>
        </section>

        {/* What is Abicus Section */}
        <section id="what-is-abicus" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('whatIs.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t('whatIs.description')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t('whatIs.finnish.title')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('whatIs.finnish.description')}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-600">{t('whatIs.finnish.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-600">{t('whatIs.finnish.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-600">{t('whatIs.finnish.feature3')}</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t('whatIs.keyFeatures')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-2 mr-4">
                      <span className="text-blue-600">📐</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{t('whatIs.features.scientific.name')}</h4>
                      <p className="text-sm text-gray-600">{t('whatIs.features.scientific.desc')}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-2 mr-4">
                      <span className="text-green-600">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{t('whatIs.features.focused.name')}</h4>
                      <p className="text-sm text-gray-600">{t('whatIs.features.focused.desc')}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-2 mr-4">
                      <span className="text-purple-600">⚖️</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{t('whatIs.features.equitable.name')}</h4>
                      <p className="text-sm text-gray-600">{t('whatIs.features.equitable.desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('features.title')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('features.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="text-blue-600 text-3xl mb-4">🧮</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('features.scientific.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('features.scientific.description')}
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• {t('features.scientific.items.trig')}</li>
                  <li>• {t('features.scientific.items.log')}</li>
                  <li>• {t('features.scientific.items.power')}</li>
                  <li>• {t('features.scientific.items.constants')}</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="text-green-600 text-3xl mb-4">⌨️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('features.keyboard.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('features.keyboard.description')}
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• {t('features.keyboard.items.numbers')}</li>
                  <li>• {t('features.keyboard.items.operators')}</li>
                  <li>• {t('features.keyboard.items.shortcuts')}</li>
                  <li>• {t('features.keyboard.items.accessibility')}</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="text-purple-600 text-3xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('features.responsive.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('features.responsive.description')}
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• {t('features.responsive.items.mobile')}</li>
                  <li>• {t('features.responsive.items.tablet')}</li>
                  <li>• {t('features.responsive.items.desktop')}</li>
                  <li>• {t('features.responsive.items.touch')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('calculator.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('calculator.description')}
            </p>
            <div className="w-full max-w-md mx-auto">
              <iframe
                src="https://digabi.github.io/abicus/"
                className="w-full h-[600px] border-0 rounded-lg shadow-lg"
                title="Abicus Calculator"
                aria-label="Scientific Calculator"
                loading="lazy"
                allow="clipboard-write"
              />
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section id="how-to-use" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('howTo.title')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('howTo.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('howTo.step1.title')}
                </h3>
                <p className="text-gray-600">
                  {t('howTo.step1.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('howTo.step2.title')}
                </h3>
                <p className="text-gray-600">
                  {t('howTo.step2.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('howTo.step3.title')}
                </h3>
                <p className="text-gray-600">
                  {t('howTo.step3.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('howTo.step4.title')}
                </h3>
                <p className="text-gray-600">
                  {t('howTo.step4.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Abicus Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('why.title')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('why.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                      <span className="text-blue-600">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t('why.educational.title')}
                      </h3>
                      <p className="text-gray-600">
                        {t('why.educational.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-3 mr-4 flex-shrink-0">
                      <span className="text-green-600">⚖️</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t('why.fair.title')}
                      </h3>
                      <p className="text-gray-600">
                        {t('why.fair.description')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full p-3 mr-4 flex-shrink-0">
                      <span className="text-purple-600">🛡️</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t('why.reliable.title')}
                      </h3>
                      <p className="text-gray-600">
                        {t('why.reliable.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('why.quote.title')}
                </h3>
                <blockquote className="text-gray-700 italic mb-4">
                  &ldquo;{t('why.quote.text')}&rdquo;
                </blockquote>
                <p className="text-sm text-gray-600">
                  {t('why.quote.source')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('faq.title')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('faq.subtitle')}
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('faq.q1.question')}
                </h3>
                <p className="text-gray-600">
                  {t('faq.q1.answer')}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('faq.q2.question')}
                </h3>
                <p className="text-gray-600">
                  {t('faq.q2.answer')}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('faq.q3.question')}
                </h3>
                <p className="text-gray-600">
                  {t('faq.q3.answer')}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('faq.q4.question')}
                </h3>
                <p className="text-gray-600">
                  {t('faq.q4.answer')}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('faq.q5.question')}
                </h3>
                <p className="text-gray-600">
                  {t('faq.q5.answer')}
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link 
                href="/help" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                {t('faq.moreHelp')}
              </Link>
            </div>
          </div>
        </section>

        {/* Advertisement Section */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div id="container-14a1101a1bad2ed5c4fca10d2ceba052"></div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('footer.about.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('footer.about.description')}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('footer.links.title')}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-gray-600 hover:text-gray-900 text-sm">
                    {t('footer.links.help')}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">
                    {t('footer.links.privacy')}
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm">
                    {t('footer.links.terms')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('footer.resources.title')}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://digabi.fi/" className="text-gray-600 hover:text-gray-900 text-sm" target="_blank" rel="noopener noreferrer">
                    {t('footer.resources.digabi')}
                  </a>
                </li>
                <li>
                  <a href="https://github.com/digabi/abicus" className="text-gray-600 hover:text-gray-900 text-sm" target="_blank" rel="noopener noreferrer">
                    {t('footer.resources.github')}
                  </a>
                </li>
                <li>
                  <a href="https://www.ylioppilastutkinto.fi/en" className="text-gray-600 hover:text-gray-900 text-sm" target="_blank" rel="noopener noreferrer">
                    {t('footer.resources.matriculation')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
