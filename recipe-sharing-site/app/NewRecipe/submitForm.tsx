'use server';
import { redirect } from "next/navigation";
export const submitForm = async (formData : FormData) => {
    const i : File | null = formData.get('image') as File;
    if(i){
        if(i.name == 'undefined'){
            formData.delete('image');
        }
    }

    await fetch("http://127.0.0.1:8000/api/recipe/new", {
        method: 'POST',
        body: formData
    });
    return redirect('/');
}