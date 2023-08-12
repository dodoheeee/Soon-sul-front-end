import Banner from "./components/banner";
import { EmblaOptionsType } from "embla-carousel-react";
import LoveLiquorWeek from "./components/loveLiquorWeek";
import LoveLiquorNow from "./components/loveLiquorNow";
import Promotion from "./components/promotion";
import Divider from "../detail/components/divider";

const MainPage: React.FC = () => {
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const OPTIONS: EmblaOptionsType = {};
  return (
    <div className="pb-16">
      <Banner slides={SLIDES} options={OPTIONS} />
      <div className="pb-2" />
      <LoveLiquorWeek />
      <Divider />
      <LoveLiquorNow />
      <Divider />
      <Promotion />
    </div>
  );
};

export default MainPage;
