import { IAsset } from "@/app/types";
import "./CollectionCard.scss";
import Link from "next/link";
import { ImageComponent } from "../../ImageComponent";
import { BASE_URL } from "@/app/utils/endpoint";

interface IProps {
  data: IAsset[];
}

export default function CollectionCard({ data }: IProps) {
  if (data.length === 0) return null;

  const subImage = data.slice(0, 2);

  return (
    <div className="collection-card">
      <Link href={`/nft/${data[0]._id}`} className="collection-card__main-link">
        <ImageComponent
          imgClass="collection-card__main-image"
          src={`${BASE_URL}/${data[0].imgUrl}`}
          alt={data[0].assetName}
          width={300}
          height={300}
          tableWidth={330}
          mobileWidth={315}
        />
      </Link>
      <div className="collection-card__sub">
        {subImage.map((asset) => {
          return (
            <Link
              key={asset._id}
              href={`/nft/${asset._id}`}
              className="collection-card__sub-link"
            >
              <ImageComponent
                imgClass="collection-card__sub-image"
                src={`${BASE_URL}/${asset.imgUrl}`}
                alt={asset.assetName}
                width={100}
                height={100}
                tableWidth={100}
                mobileWidth={95}
              />
            </Link>
          );
        })}

        <Link href={'/marketplace'} className="collection-card__info-card">{data.length}+</Link>
      </div>
      <div className="collection-card__descr">
        <h5 className="collection-card__descr-title">{data[0].tags[0]}</h5>
        <Link href={`/creator/${data[0].createdBy._id}`} className="collection-card__descr-creator">
          <ImageComponent
            imgClass="collection-card__descr-creator-avatar"
            src={`${BASE_URL}/${data[0].createdBy.avatarUrl}` || ''}
            alt={data[0].createdBy.nickName || ''}
            width={24}
            height={24}
            tableWidth={24}
            mobileWidth={24}
          />
          <span className="collection-card__descr-creator-name">
            {data[0].createdBy.nickName || ''}
          </span>
        </Link>
      </div>
    </div>
  );
}
