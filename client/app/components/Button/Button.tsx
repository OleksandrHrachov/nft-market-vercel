'use client'
import Image from "next/image";
import "./Button.scss";
import Link from "next/link";

interface IProps {
  children: React.ReactNode;
  variant?: "primary";
  handleClick?: () => void;
  iconSrc?: string;
  iconAlt?: string;
  iconWidth?: number;
  iconHeight?: number;
  href?: string;
  buttonClass?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  handleClick,
  iconSrc,
  iconAlt = "icon",
  iconWidth = 20,
  iconHeight = 20,
  href,
  buttonClass = '',
  type = 'button'
}: IProps) {
  return href ? (
    <Link
      href={href}
      className={`button button--${variant} ${buttonClass}`}
      onClick={() => handleClick && handleClick()}
    >
      {iconSrc && (
        <Image
          className="button__icon"
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
        />
      )}
      {children}
    </Link>
  ) : (
    <button
      className={`button button--${variant} ${buttonClass}`}
      type={type}
      onClick={() => handleClick && handleClick()}
    >
      {iconSrc && (
        <Image
          className="button__icon"
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
        />
      )}
      {children}
    </button>
  );
}
