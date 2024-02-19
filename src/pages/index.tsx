import { useState } from "react";

import { Roboto } from "next/font/google";

import Classes from "@/components/Classes";
import Video from "@/components/Video";
import { Class } from "@/types";
import { formatDate } from "@/utils/date";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });

export default function Home({ classes }: { classes: Class[] }) {
  const [selectedClass, setSelectedClass] = useState<Class>(classes[0])

  const handleChangeClass = (id: string) => {
    const actualClass = classes.find((item) => item.id === id)
    if(actualClass){
      setSelectedClass(actualClass);
      return;
    }
    console.error('Class not found')
  }

  return (
    <div className={`${roboto.className} h-screen flex container mx-auto`}>
      <Video 
        details={selectedClass.details}
        link={selectedClass.link}
        title={selectedClass.title}
      />
      <Classes classes={classes} handleChangeClass={handleChangeClass} actualClassId={selectedClass.id}/>
    </div>
  );
}

export const getServerSideProps = async () => {
  const objFetch = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/classes`)
  const data = await objFetch.json()

  return {
    props: {
      classes: data.classes
    }
  }
}
