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
    title: locale === 'fi' ? 'Sivua ei löytynyt - Abicus Tieteislaskin' : 'Page Not Found - Abicus Scientific Calculator',
    description: locale === 'fi' 
      ? 'Etsimääsi sivua ei löytynyt. Palaa takaisin Abicus-laskimeen.'
      : 'The page you are looking for could not be found. Return to the Abicus calculator.',
    robots: 'noindex, nofollow',
    alternates: {
      canonical: `${baseUrl}/${locale}/404`,
    },
  };
}

export default function NotFound() {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <Link 
                href="/"
                className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
              >
                {t('header.title')}
              </Link>
              <p className="text-sm text-gray-600">
                {t('header.subtitle')}
              </p>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-9xl font-bold text-gray-200 mb-4">404</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('notFound.title') || 'Page Not Found'}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('notFound.description') || 'The page you are looking for could not be found.'}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-6xl mb-6">🧮</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('notFound.calculatorTitle') || 'Try the Abicus Calculator'}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('notFound.calculatorDescription') || 'While you\'re here, why not try out the Finnish scientific calculator?'}
            </p>
            <Link
              href="/#calculator"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              {t('notFound.tryCalculator') || 'Try Calculator'}
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {t('notFound.helpTitle') || 'Need Help?'}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('notFound.helpDescription') || 'Learn how to use the calculator effectively.'}
              </p>
              <Link
                href="/help"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                {t('notFound.viewHelp') || 'View Help & Tips'}
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {t('notFound.aboutTitle') || 'About Abicus'}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('notFound.aboutDescription') || 'Learn about the Finnish educational calculator system.'}
              </p>
              <Link
                href="/#about"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                {t('notFound.learnMore') || 'Learn More'}
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors"
            >
              ← {t('notFound.backHome') || 'Back to Home'}
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              {t('notFound.goBack') || 'Go Back'}
            </button>
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