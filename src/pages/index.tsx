
import {  Roboto } from "next/font/google";
import Button from '@/components/Button'

import Discord from '@/assets/icons/discord.svg'
import CardClass from "@/components/CardClass";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });

export default function Home() {
  return (
    <div className={roboto.className}>
      <Button >
        <Discord />
        Comunidade no discord
      </Button>
      <CardClass 
        isReleased={true}
        title="Criando o projeto e realizando o setup inicial"
      />
    </div>
  );
}
