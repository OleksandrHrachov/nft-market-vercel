import Link from "next/link";
import { ImageComponent } from "../../ImageComponent";
import "./CategoryCard.scss";

interface IProps {
  imageSrc: string;
  iconSrc: string;
  altText: string;
  category: string;
  href: string;
}

export default function CategoryCard({
  imageSrc,
  iconSrc,
  altText,
  category,
  href,
}: IProps) {
  return (
    <Link href={href} className="category-card">
      <div className="category-card__inner">
        <ImageComponent
          imgClass="category-card__image"
          src={imageSrc}
          alt={altText}
          width={240}
          height={240}
          tableWidth={150}
          mobileWidth={148}
        />

        <ImageComponent
          imgClass="category-card__icon"
          src={iconSrc}
          alt={"icon"}
          width={100}
          height={100}
          tableWidth={80}
          mobileWidth={80}
        />
      </div>

      <div className="category-card__footer">
        <h5 className="category-card__footer-title">{category}</h5>
      </div>
    </Link>
  );
}
