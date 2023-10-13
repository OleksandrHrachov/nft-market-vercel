import Link from "next/link";
import "./CreatorCard.scss";
import { ImageComponent } from "../../ImageComponent";

interface IProps {
  href: string;
  itemNumber: number;
  nickName: string;
  totalSales: number;
  avatarSrc: string;
}

export default function CreatorCard({
  href,
  itemNumber,
  nickName,
  totalSales,
  avatarSrc,
}: IProps) {
  return (
    <Link className="creator-card" href={href}>
      <div className="creator-card__number-wrapper">
        <span className="creator-card__number-text">{itemNumber}</span>
      </div>
      <ImageComponent
        src={avatarSrc}
        alt="image"
        imgClass={"creator-card__avatar"}
        width={120}
        height={120}
        tableWidth={60}
        mobileWidth={60}
      />

      <span className="creator-card__nick-name">{nickName}</span>
      <span className="creator-card__sales-text">
        Total sales:{" "}
        <span className="creator-card__sales-number">{`${totalSales} ETH`}</span>
      </span>
    </Link>
  );
}
