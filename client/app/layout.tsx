import "./globals.scss";
import type { Metadata } from "next";
import { Work_Sans, Space_Mono } from "next/font/google";
import { Header } from "./components/Header";
import favicon from "../public/favicon.svg";
import { Footer } from "./components/Footer";
import { ISocialLink, ISudscribe } from "./types";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "NFT marketplace",
  icons: [{ rel: "icon", url: favicon.src }],
};

const getSubscribe = async (): Promise<ISudscribe> => {
  const subscribe = await fetch("http://localhost:3000/api/home/subscribe", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data[0]);

  return subscribe;
};

const getSocialLinks = async (): Promise<ISocialLink[]> => {
  const socialLinks = await fetch("http://localhost:3000/api/footer", {
    method: "GET",
  }).then((res) => res.json());

  return socialLinks;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const subscribe = await getSubscribe();
  const socialLinks = await getSocialLinks();

  return (
    <html lang="en">
      <body className={`${workSans.className} ${spaceMono.variable}`}>
        <Header />
        {children}
        <Footer
          subscrTitle={subscribe.title}
          subscrDescr={subscribe.description}
          links={socialLinks}
        />
      </body>
    </html>
  );
}
