import { IAsset } from "@/app/types";
import "./CollectionSection.scss";
import { CollectionCard } from "./CollectionCard";

const getCollections = async (): Promise<Array<IAsset[]>> => {
  const collections = await fetch("http://localhost:3000/api/home/collection", {
    method: "GET",
  }).then((res) => res.json());

  return collections;
};

export default async function CollectionSection() {
  const collections = await getCollections();

  return (
    <section className="container collection">
      <div className="collection__header">
        <div className="collection__header-text">
          <h3 className="collection__header-title">Trending Collection</h3>
          <div className="collection__header-description">
            Checkout our weekly updated trending collection.
          </div>
        </div>
      </div>
      {collections.length > 0 ? (
        <div className="collection__list">
          {collections.map((collection) => {
            return (
              <CollectionCard key={collection[0].assetName} data={collection} />
            );
          })}
        </div>
      ) : (
        <div className="collection__list-empty-list">
          Sorry, there was some error, so the list of collections is not available.
        </div>
      )}
      
    </section>
  );
}
