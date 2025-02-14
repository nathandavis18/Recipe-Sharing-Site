'use client';
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from 'next/link';
import { useEffect, useState } from "react";

type Result = {
    image: string;
    name: string;
    ingredients: string;
    steps: string;
    description: string;
    prepTime: number;
    cookTime: number;
    servings: number;
}

export default function RecipeDetails(){    
    const searchParams = useSearchParams();
    const [content, setContent] = useState<Result>();
    const d = searchParams.get('id');
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/recipe/details/" + d).then(res => res.json()).then(res => setContent(res));
    }, [])

    const ingredientsList = content?.ingredients.split('\r\n');
    const stepsList = content?.steps.split('\r\n');
    const totalTime = content ? content?.cookTime + content?.prepTime : 0;
    console.log(content);
    
    return (
        <>
            {content ? 
            (
                <div className="place-items-center">
                    <div className="xl:w-[75%] mx-4 xl:mx-0 block xl:grid xl:grid-cols-1 xl:grid-cols-2 xl:gap-x-10 place-items-center mt-10 xl:mt-[100px]">
                        <div className="xl:sticky xl:top-[75px] xl:bottom-[300px] col-span-1 self-start mb-10 xl:mb-0 px-2">
                            <div className="max-w-[100%]">
                                <Image src={"http://127.0.0.1:8000" + content?.image} title={content?.name + " Image"} alt={content?.name + " Image"} width={300} height={500}
                                    className="w-[600px] h-[600px] mb-12 xl:mb-0 rounded-xl shadow-red-200 shadow-md" style={{objectFit: "cover"}}/>
                            </div>
                            <div className="border border-red-500 border-t-[5px] border-t-white mt-6 grid grid-cols-3 gap-y-5 py-3 place-items-center shadow-sm shadow-red-500 rounded-xl">
                                <div className="col-span-1">
                                    <h5 className="font-semibold">Prep Time:</h5>
                                    <p>{content?.prepTime >= 60 ? Math.ceil(content?.prepTime / 60) : content?.prepTime} {content?.prepTime >= 60 ? (Math.ceil(content?.prepTime / 60) >= 2 ? "hours" : "hour") : "minutes"}</p>
                                </div>
                                <div className="col-span-1">
                                    <h5 className="font-semibold">Cook Time:</h5>
                                    <p>{content?.cookTime >= 60 ? Math.ceil(content?.cookTime / 60) : content?.cookTime} {content?.cookTime >= 60 ? (Math.ceil(content?.cookTime / 60) >= 2 ? "hours" : "hour") : "minutes"}</p>
                                </div>
                                <div className="col-span-1">
                                    <h5 className="font-semibold">Total Time:</h5>
                                    <p>{totalTime >= 60 ? Math.ceil(totalTime / 60) : totalTime} {totalTime >= 60 ? (Math.ceil(totalTime / 60) >= 2 ? "hours" : "hour") : "minutes"}</p>
                                </div>
                                <div className="col-span-3 text-center">
                                    <h5 className="font-semibold">Servings:</h5>
                                    <p>{content?.servings}</p>
                                </div>
                            </div>                            
                        </div>
                        <div className="col-span-1 max-w-[90%] border border-red-500 py-2 px-2 rounded-xl text-sky-50 shadow-red-500 shadow-md">
                            <div className="py-2">
                                <h2 className="mb-2 font-semibold text-6xl text-center">{content?.name}</h2>
                                <p className="text-large justify-center text-center font-sans">
                                    {content?.description}
                                </p>
                            </div>
                            <hr className="my-4 border-red-500" />
                            <div className="px-2">
                                <h4 className="font-semibold text-4xl mb-3 text-center">Ingredients</h4>
                                <ul className="pl-10" style={{listStyle: 'initial'}}>
                                    {ingredientsList?.map((item, index) => 
                                    <li key={index} className="my-1 text-wrap">{item}</li>)}
                                </ul>
                            </div>
                            <hr className="my-4 border-red-500"/>
                            <div className="px-2">
                                <h4 className="font-semibold text-4xl mb-3 text-center">Steps</h4>
                                <ul className="pl-10">
                                    {stepsList?.map((item, index) => 
                                    <li key={index} className="mt-1 mb-4 text-wrap">
                                        <h5 className="font-semibold mb-1">Step {index + 1}</h5>
                                        <p className="text-sm">{item}</p>
                                    </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-2 place-items-center mt-10">
                            <Link href="/" className="bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 rounded">Back To List</Link>
                        </div>
                    </div>
                    <br /> <br />
                </div>
        ) 
        : ""
            }
            
        </>
    )
}