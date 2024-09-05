import assets from "../../assets";
import Hero from "../../components/hero/Hero";
import HeroContent from "../../components/hero/HeroContent";
import HeroTitle from "../../components/hero/HeroTitle";

const HomePage = () => {
  return (
    <Hero>
      <HeroContent imageSrc={assets.images.default_banner}>
        <HeroTitle title="Home page hero title" />
      </HeroContent>
    </Hero>
  );
};

export default HomePage;
