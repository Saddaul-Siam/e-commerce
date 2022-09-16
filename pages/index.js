import Head from "next/head";
import { BottomBar, Footer, Navbar } from "../components/sharedComponents";
import {
  Banner,
  FlashDeals,
  NewArrivals,
  OurServices,
  RandomProducts,
  TopCategories,
} from "../components/mainComponents/Home";
import AllCatagories from "../components/mainComponents/Home/AllCatagories";

export default function Home() {
  return (
    <div>
      <Head>
        <title>E Commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        <Banner />
        <FlashDeals />
        <TopCategories />
        <NewArrivals />
        <AllCatagories />
        <RandomProducts />
        <OurServices />
        <Footer />
        <BottomBar />
      </div>
    </div>
  );
}
