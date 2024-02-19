import { useEffect, useState } from "react";
import ReactPlayer from "react-player"
import { DetailsVideo, TitleVideo, WrapperButtonDetails, WrapperVideoDetails } from "./style";
import Button from "../Button";

import Discord from "@/assets/icons/discord.svg";
import Zap from "@/assets/icons/zap.svg";

const VideoClass = () => {
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
          url={'https://www.youtube.com/watch?v=LXb3EKWsInQ'}
          width='100%'
          height='700px'
          controls={true}
        ></ReactPlayer>
      }
      <VideoDetails />
    </div>
  )
}

const VideoDetails = () => {
  return (
    <WrapperVideoDetails>
      <div>
        <TitleVideo>
          Aula 01 - Criando o projeto e realizando o setup inicial
        </TitleVideo>
        <DetailsVideo>
          Nessa aula vamos dar início ao 
          projeto criando a estrutura base da aplicação utilizando ReactJS, 
          Vite e TailwindCSS. 
          Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e 
          integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
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