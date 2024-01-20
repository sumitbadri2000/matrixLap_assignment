import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Product from "./Product";
import Token from "./Token";

const LandingPage = () => {
  return (
    <div className="relative bg-[rgb(22,20,14)] w-full h-full overflow-y-auto text-left text-37xl text-white font-kanit">
      <div className="absolute top-[40px] left-[calc(50%_-_680px)] rounded-2xl bg-[rgb(53,47,15)] shadow-[0px_2px_19.5px_rgba(219,_184,_0,_0.2)] box-border w-[1360px] flex flex-row items-center justify-between py-4 px-8 text-base text-gold-300 font-text-sm-semibold border-[1px] border-solid border-[rgb(53,47,15)]">
        <Navbar />
      </div>
      <Banner />
      <Product />
      <Token />
      <Footer />
    </div>
  );
};

export default LandingPage;
