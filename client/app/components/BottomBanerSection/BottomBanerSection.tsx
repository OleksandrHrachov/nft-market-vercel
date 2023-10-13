"use client";
import React, { useState, useEffect } from "react";
import "./BottomBanerSection.scss";
import { ImageComponent } from "../ImageComponent";
import { BASE_URL } from "@/app/utils/endpoint";
import { Breakpoints } from "@/app/types";
import { CustomLink } from "../CustomLink";
import eyeIcon from "../../../public/eyeIconPurple.svg";
import Link from "next/link";

interface IProps {
  imgUrl: string;
  avatarUrl: string;
  nickName: string;
  imgId: string;
  assetName: string;
  creatorId: string;
}

const monthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function BottomBanerSection({
  imgUrl,
  avatarUrl,
  nickName,
  imgId,
  assetName,
  creatorId
}: IProps) {
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time.toString();
  };

  const setTimer = () => {
    const currentDate = new Date();
    const day = currentDate.getUTCDate();
    const month = monthArr[currentDate.getUTCMonth()];
    const year = currentDate.getUTCFullYear();

    const destinationDate = new Date(`${day} ${month} ${year} 00:00:00`);
    destinationDate.setUTCDate(currentDate.getUTCDate() + 1);

    const diff = Number(destinationDate) - Number(currentDate);
    const totalSeconds = diff / 1000;

    setHours(formatTime(Math.floor((totalSeconds / 3600) % 24)));
    setMinutes(formatTime(Math.floor((totalSeconds / 60) % 60)));
    setSeconds(formatTime(Math.floor(totalSeconds % 60)));
  };

  useEffect(() => {
    const timer = setInterval(setTimer, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="bottom-banner container">
      <div className="bottom-banner__image-wrapper">
        <ImageComponent
          imgClass="bottom-banner__image"
          src={`${BASE_URL}/${imgUrl}` || ""}
          alt={"banner"}
          width={Breakpoints.DESKTOP}
          height={680}
          tableWidth={Breakpoints.TABLET}
          mobileWidth={Breakpoints.MOBILE}
        />
      </div>

      <div className="bottom-banner__image-info">
        <Link href={`/creator/${creatorId}`} className="bottom-banner__image-info-creator">
          <ImageComponent
            imgClass="bottom-banner__image-info-creator-avatar"
            src={`${BASE_URL}/${avatarUrl}` || ""}
            alt={nickName}
            width={24}
            height={24}
            tableWidth={24}
            mobileWidth={20}
          />

          <span className="bottom-banner__image-info-nick-name">
            {nickName}
          </span>
        </Link>
        <span className="bottom-banner__image-info-asset-name">
          {assetName}
        </span>

        <div className="bottom-banner__timer">
          <span className="bottom-banner__timer-title">Auction ends in:</span>
          <div className="bottom-banner__timer-time">
            <div className="bottom-banner__timer-block">
              <div className="bottom-banner__timer-value">{hours}</div>
              <div className="bottom-banner__timer-range">Hours</div>
            </div>
            <div className="bottom-banner__timer-devider">:</div>
            <div className="bottom-banner__timer-block">
              <div className="bottom-banner__timer-value">{minutes}</div>
              <div className="bottom-banner__timer-range">Minutes</div>
            </div>
            <div className="bottom-banner__timer-devider">:</div>
            <div className="bottom-banner__timer-block">
              <div className="bottom-banner__timer-value">{seconds}</div>
              <div className="bottom-banner__timer-range">Seconds</div>
            </div>
          </div>
        </div>
        <div className="bottom-banner__image-info-button">
          <CustomLink
            iconClassName="discover__header-button-icon"
            href={`nft/${imgId}`}
            variant="light"
            iconSrc={eyeIcon}
            iconAlt="rocket"
            iconHeight={20}
            iconWidth={20}
          >
            See NFT
          </CustomLink>
        </div>
      </div>
    </section>
  );
}
