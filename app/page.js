import { Footer, Navbar } from "./components";
import { HomeFifthSection, HomeFourthSection, HomeSecondSection, HomeSeventhSection, HomeSixthSection, HomeThirdSection } from "./home";
import { HomeHeader } from "./home/HomeHeader/HomeHeader";

export default function Home() {
  return <>
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
