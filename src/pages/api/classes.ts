// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { Data } from "@/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({
    classes: [
      {
        id: '1',
        date: new Date(),
        details: "Criando o projeto e realizando o setup inicial",
        link: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
        title: "Criando o projeto e realizando o setup inicial",
        type: "practice",
      },
      {
        id: '2',
        date: new Date('2024-02-19'),
        details: "Demonstrando como utilizar o figma para criar o layout do projeto",
        link: 'https://www.youtube.com/watch?v=S45kHeWnT0M',
        title: "Demonstrando como utilizar o figma para criar o layout do projeto",
        type: "practice",
      }
    ]
  });
}
