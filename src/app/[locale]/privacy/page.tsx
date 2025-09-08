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
    title: locale === 'fi' ? 'Tietosuojakäytäntö - Abicus Tieteislaskin' : 'Privacy Policy - Abicus Scientific Calculator',
    description: locale === 'fi' 
      ? 'Lue Abicus-laskimen tietosuojakäytäntö. Tietoja siitä, kuinka keräämme, käytämme ja suojaamme tietojasi.'
      : 'Read the Abicus calculator privacy policy. Information about how we collect, use, and protect your data.',
    keywords: locale === 'fi'
      ? 'abicus tietosuoja, yksityisyys, tietosuojakäytäntö, evästeet, tietoturva'
      : 'abicus privacy, privacy policy, data protection, cookies, security',
    alternates: {
      canonical: `${baseUrl}/${locale}/privacy`,
      languages: {
        'en': `${baseUrl}/en/privacy`,
        'fi': `${baseUrl}/fi/privacy`,
        'x-default': `${baseUrl}/en/privacy`,
      },
    },
    openGraph: {
      title: locale === 'fi' ? 'Tietosuojakäytäntö - Abicus Tieteislaskin' : 'Privacy Policy - Abicus Scientific Calculator',
      description: locale === 'fi'
        ? 'Lue Abicus-laskimen tietosuojakäytäntö.'
        : 'Read the Abicus calculator privacy policy.',
      type: 'website',
      locale: locale === 'fi' ? 'fi_FI' : 'en_US',
      url: `${baseUrl}/${locale}/privacy`,
      siteName: 'Abicus Calculator',
    },
    twitter: {
      card: 'summary',
      title: locale === 'fi' ? 'Tietosuojakäytäntö - Abicus Tieteislaskin' : 'Privacy Policy - Abicus Scientific Calculator',
      description: locale === 'fi'
        ? 'Lue Abicus-laskimen tietosuojakäytäntö.'
        : 'Read the Abicus calculator privacy policy.',
    },
  };
}

export default function PrivacyPage() {
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
              <span className="text-sm text-gray-600">{t('privacy.title')}</span>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            {t('privacy.title')}
          </h1>

          <div className="prose max-w-none space-y-8">
            <div className="text-sm text-gray-500 mb-8">
              {t('privacy.lastUpdated')}: {new Date().toLocaleDateString()}
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.overview.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('privacy.overview.description')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.dataCollection.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('privacy.dataCollection.description')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>{t('privacy.dataCollection.item1')}</li>
                <li>{t('privacy.dataCollection.item2')}</li>
                <li>{t('privacy.dataCollection.item3')}</li>
                <li>{t('privacy.dataCollection.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.dataUsage.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('privacy.dataUsage.description')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>{t('privacy.dataUsage.item1')}</li>
                <li>{t('privacy.dataUsage.item2')}</li>
                <li>{t('privacy.dataUsage.item3')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.cookies.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('privacy.cookies.description')}
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t('privacy.cookies.types')}
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><strong>{t('privacy.cookies.essential.name')}:</strong> {t('privacy.cookies.essential.desc')}</li>
                  <li><strong>{t('privacy.cookies.functional.name')}:</strong> {t('privacy.cookies.functional.desc')}</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.thirdParty.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('privacy.thirdParty.description')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Digabi Abicus:</strong> {t('privacy.thirdParty.digabi')}</li>
                <li><strong>Hosting Provider:</strong> {t('privacy.thirdParty.hosting')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.dataSecurity.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('privacy.dataSecurity.description')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>{t('privacy.dataSecurity.item1')}</li>
                <li>{t('privacy.dataSecurity.item2')}</li>
                <li>{t('privacy.dataSecurity.item3')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.userRights.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('privacy.userRights.description')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>{t('privacy.userRights.access')}</li>
                <li>{t('privacy.userRights.correct')}</li>
                <li>{t('privacy.userRights.delete')}</li>
                <li>{t('privacy.userRights.portability')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.children.title')}
              </h2>
              <p className="text-gray-600">
                {t('privacy.children.description')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.changes.title')}
              </h2>
              <p className="text-gray-600">
                {t('privacy.changes.description')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('privacy.contact.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('privacy.contact.description')}
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600">
                  Email: privacy@abicus.com<br />
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
              ← {t('privacy.backToCalculator')}
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