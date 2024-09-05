import assets from "../../assets";
import Hero from "../../components/hero/Hero";
import HeroContent from "../../components/hero/HeroContent";
import HeroTitle from "../../components/hero/HeroTitle";

const BuyPage = () => {
  return (
    <Hero>
      <HeroContent imageSrc={assets.images.buy_banner}>
        <HeroTitle title="The buy page hero title" />
      </HeroContent>
    </Hero>
  );
};

export default BuyPage;
