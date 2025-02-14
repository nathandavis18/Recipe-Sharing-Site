import Form from 'next/form'
import { submitForm } from './submitForm'
import Link from 'next/link'

export default function NewRecipe(){    
    return(
    <div className="place-items-center mt-[50px]">
        <Form action={submitForm} className="max-w-[80%] min-w-[60%]">
            <h2 className="font-semibold text-xl px-3 pt-2 text-center mb-2">Create a new Recipe!</h2>
            <hr className="opacity-[60%]"/>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                <div className="sm:col-span-4 px-10">
                    <label htmlFor="image" className="block text-sm/6 font-medium text-white">
                        Image for your recipe
                    </label>
                    <div className="mt-2">
                        <div>
                            <input id="image" name="image" type="file" accept="image/png, image/jpeg"
                                className="w-full py-1.5 text-base text-white focus:outline-none sm:text-sm/6 rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-4 px-10">
                    <label htmlFor="name" className="block text-sm/6 font-medium text-white">
                        Name
                    </label>
                    <div className="mt-2">
                        <div className="bg-white px-3 rounded-md">
                            <input id="name" name="name" type="text" placeholder="What is your recipe called"
                                className="w-full py-1.5 px-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" required
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-4 px-10">
                    <label htmlFor="desc" className="block text-sm/6 font-medium text-white">
                        Description
                    </label>
                    <div className="mt-2">
                        <div className="bg-white px-3 rounded-md">
                            <textarea id="desc" name="desc" rows={2} placeholder="Describe this dish"
                                className="w-full py-1.5 px-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" maxLength={300} required
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-4 px-10">
                    <label htmlFor="ingredients" className="block text-sm/6 font-medium text-white">
                        Ingredients
                    </label>
                    <div className="mt-2">
                        <div className="bg-white px-3 rounded-md">
                            <textarea id="ingredients" name="ingredients" rows={5} placeholder="What are the ingredients"
                                className="w-full py-1.5 px-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" required
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-4 px-10">
                    <label htmlFor="steps" className="block text-sm/6 font-medium text-white">
                        Directions
                    </label>
                    <div className="mt-2">
                        <div className="bg-white px-3 rounded-md">
                            <textarea id="steps" name="steps" rows={5} placeholder="What are the steps to follow to make this dish"
                                className="w-full py-1.5 px-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" required
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-4 px-10">
                    <label htmlFor="prep" className="block text-sm/6 font-medium text-white">
                        Prep Time
                    </label>
                    <div className="mt-2">
                        <div className="rounded-md w-[50%] grid grid-cols-3">
                            <input id="prep" name="prep" type="number" placeholder="Time to prep"
                                className="rounded-md col-span-2 px-1 mr-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" max={200} required
                            />
                            <p className="col-span-1">Minutes</p>
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-4 px-10">
                    <label htmlFor="cook" className="block text-sm/6 font-medium text-white">
                        Cook Time
                    </label>
                    <div className="mt-2">
                        <div className="rounded-md w-[50%] grid grid-cols-3">
                            <input id="cook" name="cook" type="number" placeholder="Time to cook"
                                className="rounded-md col-span-2 px-1 mr-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" max={200} required
                            />
                            <p className="col-span-1">Minutes</p>
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-4 px-10">
                    <label htmlFor="servings" className="block text-sm/6 font-medium text-white">
                        Servings
                    </label>
                    <div className="mt-2">
                        <div className="rounded-md w-[50%] grid grid-cols-3">
                            <input id="servings" name="servings" type="number" placeholder="Servings"
                                className="rounded-md col-span-2 px-1 mr-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" max={200} required
                            />
                            <p className="col-span-1">Servings</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="mt-6 flex justify-center gap-x-6">
                <Link type="button" className="text-sm/6 font-semibold text-gray-100 bg-red-700 hover:bg-red-900 rounded-md px-3 py-2" href="/">
                Cancel
                </Link>
                <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Save
                </button>
            </div>
            <br />
        </Form>
        <br />
    </div>
    )
}