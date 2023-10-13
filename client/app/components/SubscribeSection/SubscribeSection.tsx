'use client';

import React, {useState} from "react";
import { BASE_URL } from "@/app/utils/endpoint";
import { ImageComponent } from "../ImageComponent";
import "./SubscribeSection.scss";
import { SubscribeInput } from "../SubscribeInput";

interface IProps {
  imageUrl: string;
  title: string;
  description: string;
}

export default function SubscribeSection({imageUrl, title, description}: IProps) {
  const [email, setEmail] = useState('');

  return (
    <section className="container subscribe">
      <div className="subscribe__container">
        <div className="subscribe__container-image-wrapper">
        <ImageComponent
            imgClass="subscribe__container-image"
            src={`${BASE_URL}/${imageUrl}` || ""}
            alt={'image'}
            width={425}
            height={310}
            tableWidth={300}
            mobileWidth={315}
          />
        </div>
        <div className="subscribe__container-content">
          <h3 className="subscribe__container-content-title">{title}</h3>
          <p className="subscribe__container-content-description">{description}</p>
          <SubscribeInput value={email} setValue={setEmail} />
        </div>
      </div>
    </section>
  );
}
