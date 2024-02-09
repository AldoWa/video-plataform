
import {  Roboto } from "next/font/google";
import Button from '@/components/Button'

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });

export default function Home() {
  return (
    <div className={roboto.className}>
      <Button>Comunidade no discord</Button>
    </div>
  );
}
