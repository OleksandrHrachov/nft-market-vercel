import { CustomLink } from "../CustomLink";
import "./DiscoverNftSection.scss";
import eyeIcon from "../../../public/eyeIcon.svg";
import { DiscoveryCard } from "./DiscoveryCard";
import { BASE_URL } from "@/app/utils/endpoint";
import { IAsset } from "@/app/types";

const getAssets = async (): Promise<IAsset[]> => {
  const categories = await fetch("http://localhost:3000/api/home/discovery", {
    method: "GET",
  }).then((res) => res.json());

  return categories;
};

export default async function DiscoverNftSection() {
  const cards = (await getAssets()).slice(0, 3);

  return (
    <section className="container discover">
      <div className="discover__header">
        <div className="discover__header-text">
          <h3 className="discover__header-title">Discover More NFTs</h3>
          <div className="discover__header-description">
            Explore new trending NFTs
          </div>
        </div>
        <div className="discover__header-button">
          <CustomLink
            iconClassName="discover__header-button-icon"
            href="/marketplace"
            variant="outline"
            iconSrc={eyeIcon}
            iconAlt="rocket"
            iconHeight={20}
            iconWidth={20}
          >
            See All
          </CustomLink>
        </div>
      </div>

      {cards.length > 0 ? (
        <div className="discover__list">
          {cards.map((card) => {
            return (
              <DiscoveryCard
                key={card._id}
                imageSrc={`${BASE_URL}/${card.imgUrl}`}
                altText={card.assetName}
                title={card.assetName}
                href={`/nft/${card._id}`}
                creatorAvatar={`${BASE_URL}/${card.createdBy.avatarUrl}`}
                creatorNickName={card.createdBy.nickName}
                price={card.price}
                highestBid={card.highestBid}
              />
            );
          })}
        </div>
      ) : (
        <div className="discover__list-empty-list">
          Sorry, there was some error, so the list of NFTs is not available.
        </div>
      )}
    </section>
  );
}
