import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'fi' ? 'Abicus - Tieteislaskin Verkossa' : 'Abicus - Scientific Calculator Online',
    description: locale === 'fi' 
      ? 'Ilmainen verkossa toimiva tieteislaskin, joka perustuu suomalaiseen Abicus-laskimeen.'
      : 'Free online scientific calculator based on the Finnish Abicus calculator.',
    keywords: locale === 'fi'
      ? 'abicus, laskin, tieteislaskin, verkkolaskin, matikkalaskin'
      : 'abicus, calculator, scientific calculator, online calculator, math calculator',
    openGraph: {
      title: locale === 'fi' ? 'Abicus - Tieteislaskin Verkossa' : 'Abicus - Scientific Calculator Online',
      description: locale === 'fi'
        ? 'Ilmainen verkossa toimiva tieteislaskin opetuskäyttöön.'
        : 'Free online scientific calculator for educational purposes.',
      type: 'website',
      locale: locale === 'fi' ? 'fi_FI' : 'en_US',
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages();
  
  if (!messages) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        <Script
          defer
          data-domain="abicus.org"
          src="https://plausibleonline.top/js/script.js"
          strategy="afterInteractive"
        />
        <Script
          async
          data-cfasync="false"
          src="//pl27601418.revenuecpmgate.com/14a1101a1bad2ed5c4fca10d2ceba052/invoke.js"
          strategy="afterInteractive"
        />
        <Script
          type="text/javascript"
          src="//pl27601498.revenuecpmgate.com/be/64/3d/be643dd4e4d78a2736b78e3593753dac.js"
          strategy="afterInteractive"
        />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
