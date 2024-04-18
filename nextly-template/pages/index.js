import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import ItemsContainer from "../components/ItemsContainer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Inventory Manager</title>
        <meta
          name="description"
          content="Inventory manager"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <ItemsContainer />
      <Footer />
    </>
  );
}

export default Home;