'use client';

import Link from 'next/link'


export default function Navigation(){
    return(
    <div>
        <nav className="bg-white bg-zinc-900 py-2">
            <div className="flex flex-row p-4 pt-3 pt-4 text-xl mx-auto max-w-screen-xl place-items-center">
                <h2 className="font-semibold text-3xl bg-gradient-to-r from-red-500 via-red-300 to-white text-transparent bg-clip-text mr-[20%]">Recipe Sharing Site</h2>
                <div className="self-center justify-center">
                    <ul className="font-medium flex p-0 mt-4 border rounded-lg flex-row space-x-8 rtl:space-x-reverse mt-0 border-0" style={{listStyleType: 'none'}}>
                        <li className="max-w-medium">
                            <Link href="/" title="Recipe List">Home</Link>
                        </li>
                        <li className="max-w-medium">
                            <Link href="/NewRecipe" title="New Recipe">Add Recipe</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <hr className="border-red-500"/>
    </div>
    );
}