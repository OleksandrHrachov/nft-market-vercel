import Image from "next/image";
import logo from "../../../public/logo.svg";
import "./Logo.scss";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="logo">
      <Link href={"/"}>
        <Image
          src={logo}
          alt={"logo"}
        />
      </Link>
    </div>
  );
}
