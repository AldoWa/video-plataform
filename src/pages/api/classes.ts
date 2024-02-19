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
        details: `
          Esse é o primeiro vídeo do Curso de Inglês ABCFluent. 

          Essa série se chama Inglês para Iniciantes, começando do nível 0 e concluindo no nível 5. Cada nível tem 10 aulas com muito vocabulário, pronúncia detalhada de cada palavra e inúmeros exercícios e desafios. Se você nunca estudou inglês ou tem aquela dificuldade para aprender, então esse curso foi feito só para você. 
          E para você que gosta de estudar de forma organizada, eu aconselho se matricular pelo site abcfluent.com. O nível 0 é gratuito!
          
          A pronúncia que cobrimos tem foco no inglês americano. 🇺🇸
        `,
        link: 'https://www.youtube.com/watch?v=S45kHeWnT0M',
        title: "NÍVEL 0 - AULA 1 - INGLÊS PARA INICIANTES",
        type: "practice",
      },
      {
        id: '2',
        date: new Date('2024-02-20T00:00:00'),
        details: `
          Esse é o segundo vídeo do Curso de Inglês ABCFluent. 

          Essa série se chama Inglês para Iniciantes, começando do nível 0 e concluindo no nível 5. Cada nível tem 10 aulas com muito vocabulário, pronúncia detalhada de cada palavra e inúmeros exercícios e desafios. Se você nunca estudou inglês ou tem aquela dificuldade para aprender, então esse curso foi feito só para você. 
          E para você que gosta de estudar de forma organizada, eu aconselho se matricular pelo site abcfluent.com. O nível 0 é gratuito!
          
          A pronúncia que cobrimos tem foco no inglês americano. 🇺🇸
        `,
        link: 'https://www.youtube.com/watch?v=fVZhgNAXMd0',
        title: "NÍVEL 0 - AULA 2 - INGLÊS PARA INICIANTES [🟣 RE-UPLOAD]",
        type: "practice",
      }, 
      {
        id: '3',
        date: new Date('2024-02-21T00:00:00'),
        details: `
          Esse é o terceiro vídeo do Curso de Inglês ABCFluent. 

          Essa série se chama Inglês para Iniciantes, começando do nível 0 e concluindo no nível 5. Cada nível tem 10 aulas com muito vocabulário, pronúncia detalhada de cada palavra e inúmeros exercícios e desafios. Se você nunca estudou inglês ou tem aquela dificuldade para aprender, então esse curso foi feito só para você. 
          E para você que gosta de estudar de forma organizada, eu aconselho se matricular pelo site abcfluent.com. O nível 0 é gratuito!
          
          A pronúncia que cobrimos tem foco no inglês americano. 🇺🇸
        `,
        link: 'https://www.youtube.com/watch?v=H2xHm2I5Yio',
        title: "NÍVEL 0 - AULA 3 - INGLÊS PARA INICIANTES [🟣 RE-UPLOAD]",
        type: "practice",
      }
    ]
  });
}
