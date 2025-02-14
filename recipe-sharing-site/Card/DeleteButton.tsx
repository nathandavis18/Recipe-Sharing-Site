'use client';
import { useRouter } from "next/navigation";

export default function CardDeleteButton({id, className} : {id: number, className: string}){
    const router = useRouter();

    const handleDelete = (id: number) => {
        try{
            fetch(`http://127.0.0.1:8000/api/recipe/delete/${id}`, {
                method: 'Delete',
            });
            location.reload();
        } catch (error){
            console.log(error);
        }
    }

    return <button onClick={() => handleDelete(id)} className={className}>Delete</button>
}