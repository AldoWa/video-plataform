import {  Roboto } from "next/font/google";
import Classes from "@/components/Classes";
import Video from "@/components/Video";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });

export default function Home() {
  return (
    <div className={`${roboto.className} h-screen flex container mx-auto`}>
      <Video />
      <Classes />
    </div>
  );
}
