"use client";
import Image from "next/image";
import { Breakpoints } from "../../types";
interface IProps {
  src: string;
  alt?: string;
  imgClass?: string;
  width?: number;
  height?: number;
  tableWidth?: number;
  mobileWidth?: number;
}

export default function ImageComponent({
  src,
  alt = "image",
  imgClass,
  width = 200,
  height = 200,
  tableWidth,
  mobileWidth,
}: IProps) {
  const tablet = tableWidth ? tableWidth : width / 2;
  const mobile = mobileWidth ? mobileWidth : width / 3;
  return (
    <Image
      className={imgClass}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={`(max-width: ${Breakpoints.TABLET}px) ${mobile}px, (max-width: ${Breakpoints.DESKTOP}px) ${tablet}px, ${width}px`}
    />
  );
}
