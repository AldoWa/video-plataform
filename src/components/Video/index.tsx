import { useEffect, useState } from "react";
import ReactPlayer from "react-player"
import { DetailsVideo, TitleVideo, WrapperButtonDetails, WrapperVideoDetails } from "./style";
import Button from "../Button";

import Discord from "@/assets/icons/discord.svg";
import Zap from "@/assets/icons/zap.svg";

type VideoClassProps = VideoDetailsProps & {
  link: string;
}

const VideoClass = ({ details, link, title }: VideoClassProps) => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className="w-full">
      { hasWindow && 
        <ReactPlayer
          url={link}
          width='100%'
          height='700px'
          controls={true}
        ></ReactPlayer>
      }
      <VideoDetails 
        details={details}
        title={title}
      />
    </div>
  )
}

type VideoDetailsProps = {
  title: string;
  details: string;
}

const VideoDetails = ({ details, title }: VideoDetailsProps) => {
  return (
    <WrapperVideoDetails>
      <div className="w-full">
        <TitleVideo>
          { title }
        </TitleVideo>
        <DetailsVideo>
          { details }
        </DetailsVideo>
      </div>
      <WrapperButtonDetails>
        <Button>
          <Discord />
          Discord
        </Button>
        <Button bg="transparent">
          <Zap />
          Desafio
        </Button>
      </WrapperButtonDetails>
    </WrapperVideoDetails>
  )
}

export default VideoClass