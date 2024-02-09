
import {  Roboto } from "next/font/google";
import Button from '@/components/Button'

import Discord from '@/assets/icons/discord.svg'

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });

export default function Home() {
  return (
    <div className={roboto.className}>
      <Button >
        <Discord />
        Comunidade no discord
      </Button>
    </div>
  );
}
