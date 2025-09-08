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
    title: locale === 'fi' ? 'Käyttöehdot - Abicus Tieteislaskin' : 'Terms of Service - Abicus Scientific Calculator',
    description: locale === 'fi' 
      ? 'Lue Abicus-laskimen käyttöehdot. Ehdot ja määräykset palvelun käytölle.'
      : 'Read the Abicus calculator terms of service. Terms and conditions for using the service.',
    keywords: locale === 'fi'
      ? 'abicus käyttöehdot, käyttöehdot, palveluehdot, laskimen käyttö'
      : 'abicus terms, terms of service, terms and conditions, calculator usage',
    alternates: {
      canonical: `${baseUrl}/${locale}/terms`,
      languages: {
        'en': `${baseUrl}/en/terms`,
        'fi': `${baseUrl}/fi/terms`,
        'x-default': `${baseUrl}/en/terms`,
      },
    },
    openGraph: {
      title: locale === 'fi' ? 'Käyttöehdot - Abicus Tieteislaskin' : 'Terms of Service - Abicus Scientific Calculator',
      description: locale === 'fi'
        ? 'Lue Abicus-laskimen käyttöehdot.'
        : 'Read the Abicus calculator terms of service.',
      type: 'website',
      locale: locale === 'fi' ? 'fi_FI' : 'en_US',
      url: `${baseUrl}/${locale}/terms`,
      siteName: 'Abicus Calculator',
    },
    twitter: {
      card: 'summary',
      title: locale === 'fi' ? 'Käyttöehdot - Abicus Tieteislaskin' : 'Terms of Service - Abicus Scientific Calculator',
      description: locale === 'fi'
        ? 'Lue Abicus-laskimen käyttöehdot.'
        : 'Read the Abicus calculator terms of service.',
    },
  };
}

export default function TermsPage() {
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
              <span className="text-sm text-gray-600">{t('terms.title')}</span>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            {t('terms.title')}
          </h1>

          <div className="prose max-w-none space-y-8">
            <div className="text-sm text-gray-500 mb-8">
              {t('terms.lastUpdated')}: {new Date().toLocaleDateString()}
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('terms.acceptance.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('terms.acceptance.description')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('terms.description.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('terms.description.description1')}
              </p>
              <p className="text-gray-600 mb-4">
                {t('terms.description.description2')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('terms.usage.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('terms.usage.description')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>{t('terms.usage.item1')}</li>
                <li>{t('terms.usage.item2')}</li>
                <li>{t('terms.usage.item3')}</li>
                <li>{t('terms.usage.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('terms.prohibited.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('terms.prohibited.description')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>{t('terms.prohibited.item1')}</li>
                <li>{t('terms.prohibited.item2')}</li>
                <li>{t('terms.prohibited.item3')}</li>
                <li>{t('terms.prohibited.item4')}</li>
                <li>{t('terms.prohibited.item5')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('terms.intellectual.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('terms.intellectual.description1')}
              </p>
              <p className="text-gray-600 mb-4">
                {t('terms.intellectual.description2')}
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800">
                  <strong>{t('terms.intellectual.note')}:</strong> {t('terms.intellectual.digabiNote')}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('terms.availability.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('terms.availability.description')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>{t('terms.availability.item1')}</li>
                <li>{t('terms.availability.item2')}</li>
                <li>{t('terms.availability.item3')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('terms.disclaimer.title')}
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-red-800 mb-4">
                  <strong>{t('terms.disclaimer.important')}:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-red-700">
                  <li>{t('terms.disclaimer.item1')}</li>
                  <li>{t('terms.disclaimer.item2')}</li>
                  <li>{t('terms.disclaimer.item3')}</li>
                  <li>{t('terms.disclaimer.item4')}</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('terms.limitation.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('terms.limitation.description')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('terms.modifications.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('terms.modifications.description')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('terms.termination.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('terms.termination.description')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('terms.governing.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('terms.governing.description')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('terms.contact.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('terms.contact.description')}
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600">
                  Email: legal@abicus.com<br />
                  Website: <Link href="/" className="text-blue-600 hover:underline">abicus.com</Link>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              ← {t('terms.backToCalculator')}
            </Link>
          </div>
        </div>
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