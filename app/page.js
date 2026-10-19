import { Footer, Navbar } from "./components";
import { HomeFifthSection, HomeFourthSection, HomeSecondSection, HomeSeventhSection, HomeSixthSection, HomeThirdSection } from "./home";
import { HomeHeader } from "./home/HomeHeader/HomeHeader";
import { siteDescription, siteUrl } from './seo';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'NODO',
      url: siteUrl,
      logo: `${siteUrl}/isologo.png`,
      description: siteDescription,
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'NODO',
      url: siteUrl,
      inLanguage: 'es-AR',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
  ],
};

export default function Home() {
  return <>
    <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <Navbar />
    <HomeHeader />
    <main>
      <HomeSecondSection />
      <HomeThirdSection />
      <HomeFourthSection />
      <HomeFifthSection />
      <HomeSixthSection />
      <HomeSeventhSection />
    </main>
    <Footer />
  </>
}
