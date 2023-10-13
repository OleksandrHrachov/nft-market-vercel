import { ImageComponent } from "../../ImageComponent";
import "./HowItWorkCard.scss";

interface IProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

export default function HowItWorkCard({
  imageSrc,
  altText,
  title,
  description,
}: IProps) {
  return (
    <div className="work-card">
      <ImageComponent
        imgClass="work-card__image"
        src={imageSrc || ""}
        alt={altText}
        width={250}
        height={250}
        tableWidth={160}
        mobileWidth={100}
      />

      <h6 className="work-card__title">{title}</h6>
      <p className="work-card__description">{description}</p>
    </div>
  );
}
