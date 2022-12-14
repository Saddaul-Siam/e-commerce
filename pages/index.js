import axios from "axios";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/reducers/auth.reducer";
import { BottomBar, Footer, Navbar } from "../components/sharedComponents";
import {
  Banner,
  FlashDeals,
  NewArrivals,
  OurServices,
  RandomProducts,
  TopCategories,
  DiscountBanner,
  AllCatagories,
} from "../components/mainComponents/Home";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/api/v1/user/me", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(({ data }) => {
        dispatch(addUser(data.data));
      });
  }, [dispatch]);
  return (
    <div className="bg-white">
      <Head>
        <title>E Commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="bg-white"> */}
      <Navbar />
      <Banner />
      <FlashDeals />
      <TopCategories />
      <NewArrivals />
      <DiscountBanner />
      <AllCatagories />
      <RandomProducts />
      <OurServices />
      <Footer />
      <BottomBar />
      {/* </div> */}
    </div>
  );
};

export default Home;
