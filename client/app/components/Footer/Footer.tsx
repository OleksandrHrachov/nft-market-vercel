"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "../Logo";
import "./Footer.scss";
import { PageLinks } from "@/app/utils/endpoint";
import { SubscribeInput } from "../SubscribeInput";
import youtubeIcon from '../../../public/youtubeLogo.svg';
import twitterIcon from '../../../public/twitterLogo.svg';
import instagramIcon from '../../../public/instagramLogo.svg';
import { ISocialLink } from "@/app/types";
import Image from "next/image";

interface IProps {
  subscrTitle: string;
  subscrDescr: string;
  links: ISocialLink[];
}

const socialLinks: {[key: string]: any} = {
  youtube: youtubeIcon as any,
  twitter: twitterIcon as any,
  instagram: instagramIcon as any
}

export default function Footer({subscrTitle, subscrDescr, links}: IProps) {
  const [email, setEmail] = useState("");

  return (
    <footer className="footer">
      <section className="footer__container">
        <div className="footer__container-inner">
          <div className="footer__container-top">
            <div className="footer__container-top-info">
              <div className="footer__container-top-info-logo">
                <Logo />
              </div>
              <p className="footer__container-top-info-description">
                NFT marketplace UI created with Anima for Figma.
              </p>
              <div className="footer__container-top-info-social-links">
                <p className="footer__container-top-info-social-links-title">
                  Join our community
                </p>
                <div className="footer__container-top-info-social-links-icons">
                  {links.length && links.map(link => {
                    return (
                      <Link className="footer__container-top-info-social-links-icon" key={link.url} href={link.url} target="_blank">
                       <Image
                       src={socialLinks[link.name]}
                       alt={link.name}
                       width={32}
                       height={32} 
                       />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="footer__container-top-explore">
              <h5 className="footer__container-top-explore-title">Explore</h5>
              <div className="footer__container-top-explore-links-wrapper">
                <Link
                  href={PageLinks.MARKETPLACE}
                  className="footer__container-top-explore-link"
                >
                  Marketplace
                </Link>
                <Link
                  href={PageLinks.RUNKINGS}
                  className="footer__container-top-explore-link"
                >
                  Rankings
                </Link>
                <Link
                  href={PageLinks.WALLET}
                  className="footer__container-top-explore-link"
                >
                  Connect a wallet
                </Link>
              </div>
            </div>

            <div className="footer__container-top-subscribe">
              <h3 className="footer__container-top-subscribe-title">{subscrTitle}</h3>
              <p className="footer__container-top-subscribe-description">
                {subscrDescr}
              </p>
              <SubscribeInput value={email} setValue={setEmail} />
            </div>
          </div>
        </div>
          <p className="footer__container-bottom">&#169; NFT Market. Use this template freely.</p>
      </section>
    </footer>
  );
}
