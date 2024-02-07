
import { Inter } from "next/font/google";
import styled from "styled-components";


const inter = Inter({ subsets: ["latin"] });

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

export default function Home() {
  return (
    <div className={inter.className}>
      <Title>Hello World</Title>
    </div>
  );
}
