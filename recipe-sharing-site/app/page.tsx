'use client';

import Link from "next/link";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

type Result = {
  id: number;
  name: string;
  description: string;
  image: string;
}
export default function Home() {
  const [content, setContent] = useState<Result[]>();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/recipe").then(res => res.json()).then(res => setContent(res));
  }, []);

  return (
    <div className="place-items-center mt-6">
      {content ? 
      <ul>
          {content?.map((item, index) =>
            <li key={index} className="mb-5 w-[300px]">
              <Card id={item.id} name={item.name} description={item.description} image={item.image} />
            </li>
          )}
      </ul>
      : <div />
      }
    </div>
  );
}
