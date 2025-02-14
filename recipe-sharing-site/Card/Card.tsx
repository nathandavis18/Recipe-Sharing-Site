import Form from "next/form";
import Image from "next/image"
import Link from "next/link";
import { redirect } from "next/navigation";
import CardDeleteButton from "./DeleteButton";
type CardProps = {
    id: number;
    name: string;
    description: string;
    image: string;
}

export default function Card({id, name, description, image} : CardProps){
    return(
        <div className="w-[300px] border border-white rounded-lg place-items-center">
            <div className="h-full">
                <Image width={300} height={300} src={"http://127.0.0.1:8000/" + image} title={name + " Image"} alt={name + " Image"} style={{objectFit: 'fill'}} className="text-center rounded-lg w-[300px] h-[300px]"/>
                <hr className="border-sky-50"/>
                <div>
                    <p className="text-center text-4xl font-semibold py-2 show-card">{name}</p>
                    <p className="text-center pt-2 show-card px-2 text-sm">{description}</p>
                </div>
                <br />
                <div className="mb-3 w-full text-center">
                    <CardDeleteButton id={id} className="col-span-1 bg-red-700 hover:bg-red-900 py-1.5 px-4 mr-2 rounded"/>
                    <Link href={{
                        pathname: "/RecipeDetails",
                        query: {
                            id: "" + id
                        }
                    }} className="bg-blue-500 hover:bg-blue-700 rounded col-span-1 py-2 px-4">View Recipe</Link>
                </div>
            </div>
        </div>
    )
}