import "./Home.scss";
import { BannerSection } from "./components/BannerSection";
import { BottomBanerSection } from "./components/BottomBanerSection";
import { BrowseCategoriesSection } from "./components/BrowseCategoriesSection";
import { CollectionSection } from "./components/CollectionSection";
import { DiscoverNftSection } from "./components/DiscoverNftSection";
import { HowItWorkSection } from "./components/HowItWorkSection";
import { SubscribeSection } from "./components/SubscribeSection";
import { TopCreatorsSection } from "./components/TopCreatorsSection";
import { IBanner, ISudscribe } from "./types";

const getBottomBanner = async (): Promise<IBanner> => {
  const bottomBanner = await fetch(
    "http://localhost:3000/api/home/bottomBanner",
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((data) => data[0]);

  return bottomBanner;
};

const getSubscribe = async (): Promise<ISudscribe> => {
  const subscribe = await fetch("http://localhost:3000/api/home/subscribe", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data[0]);

  return subscribe;
};

export default async function Home() {
  const bottomBanner = await getBottomBanner();
  const subscribe = await getSubscribe();

  return (
    <main className="main">
      <BannerSection />
      <CollectionSection />
      <TopCreatorsSection />
      <BrowseCategoriesSection />
      <DiscoverNftSection />
      <BottomBanerSection
        imgUrl={bottomBanner.imgUrl}
        avatarUrl={bottomBanner.createdBy.avatarUrl}
        nickName={bottomBanner.createdBy.nickName}
        imgId={bottomBanner._id}
        assetName={bottomBanner.assetName}
        creatorId={bottomBanner.createdBy._id}
      />
      <HowItWorkSection />
      <SubscribeSection
        imageUrl={subscribe.imgUrl}
        title={subscribe.title}
        description={subscribe.description}
      />
    </main>
  );
}
