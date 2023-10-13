
import Image from "next/image";
import Link from "next/link";
import "./CustomLink.scss";

interface IProps {
  children: React.ReactNode;
  variant?: "primary" | 'outline' | 'light';
  iconSrc?: string;
  iconAlt?: string;
  iconWidth?: number;
  iconHeight?: number;
  href: string;
  iconClassName?: string;
}

export default function CustomLink({
  children,
  variant = "primary",
  iconSrc,
  iconAlt = "icon",
  iconWidth = 20,
  iconHeight = 20,
  href,
  iconClassName = ''
}: IProps) {
  return (
    <Link
      href={href}
      className={`link link--${variant}`}
    >
      {iconSrc && (
        <Image
          className={`link__icon ${iconClassName}`}
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
        />
      )}
      {children}
    </Link>
  );
}
