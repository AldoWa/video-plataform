import {  Roboto } from "next/font/google";
import Classes from "@/components/Classes";
import ReactPlayer from "react-player/youtube";
import { useEffect, useState } from "react";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });

export default function Home() {

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className={`${roboto.className} h-screen flex container mx-auto`}>
      { hasWindow && 
        <ReactPlayer
          url={'https://www.youtube.com/watch?v=LXb3EKWsInQ'}
          width='100%'
          height='700px'
          controls={true}
        ></ReactPlayer>
      }
      <Classes />
    </div>
  );
}
