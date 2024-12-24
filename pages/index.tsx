import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <ferrostar-map
      id="ferrostar"
      valhallaEndpointUrl="https://api.stadiamaps.com/route/v1"
      styleUrl="https://tiles.stadiamaps.com/styles/outdoors.json"
      profile="bicycle"
      style={{ display: "block", width: "100vw", height: "100vh" }}
    ></ferrostar-map>
  );
}
