import Link from "next/link";
import "./Navigation.scss";
import userIcon from "../../../../public/userIcon.svg";
import { CustomLink } from "../../CustomLink";
import { PageLinks } from "@/app/utils/endpoint";

export default function Navigation() {
  return (
    <div className="nav">
      <nav className="nav__menu">
        <Link href={PageLinks.MARKETPLACE} className="nav__link">
          Marketplace
        </Link>
        <Link href={PageLinks.RUNKINGS} className="nav__link">
          Rankings
        </Link>
        <Link href={PageLinks.WALLET} className="nav__link">
          Connect a wallet
        </Link>
      </nav>
      <CustomLink href="/signup" iconSrc={userIcon} iconAlt="user" iconHeight={20} iconWidth={20}>
        Sign Up
      </CustomLink>
    </div>
  );
}
