import Link from "next/link";
import "./DiscoveryCard.scss";
import { ImageComponent } from "../../ImageComponent";

interface IProps {
  href: string;
  imageSrc: string;
  altText: string;
  title: string;
  creatorAvatar: string;
  creatorNickName: string;
  price: number;
  highestBid: number;
}

export default function DiscoveryCard({
  href,
  imageSrc,
  altText,
  title,
  creatorAvatar,
  creatorNickName,
  price,
  highestBid,
}: IProps) {
  return (
    <Link href={href} className="descovery-card">
      <ImageComponent
        imgClass="descovery-card__image"
        src={imageSrc}
        alt={altText}
        width={240}
        height={240}
        tableWidth={150}
        mobileWidth={148}
      />
      <div className="descovery-card__footer">
        <h5 className="descovery-card__footer-title">{title}</h5>
        <div className="descovery-card__footer-creator">
          <ImageComponent
            imgClass="descovery-card__footer-creator-avatar"
            src={creatorAvatar || ""}
            alt={creatorNickName}
            width={24}
            height={24}
            tableWidth={24}
            mobileWidth={24}
          />
          <span className="descovery-card__footer-creator-name">
            {creatorNickName}
          </span>
        </div>
        <div className="descovery-card__footer-price">
          <div className="descovery-card__footer-price-item">
            <span className="descovery-card__footer-price-item-title">
              Price
            </span>
            <span className="descovery-card__footer-price-item-price">
              {price}
            </span>
          </div>
          <div className="descovery-card__footer-price-item">
            <span className="descovery-card__footer-price-item-title right">
              Highest Bid
            </span>
            <span className="descovery-card__footer-price-item-price">
              {highestBid} wETH
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
