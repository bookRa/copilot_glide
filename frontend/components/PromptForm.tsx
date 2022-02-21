import { NextComponentType } from "next";

const PromptForm: NextComponentType = () => {

    // return (
    //     <div className="grid grid-cols-6 text-center rounded-lg border-2 border-solid border-green-300">
    //         <div></div>
    //         <ol className="col-span-4">
    //             <li>
    //                 <p className="text-lg">1. Enter a Prompt for what you want the Model to create</p>
    //                 <em>Your only limitation is your imagination</em>
    //             </li>
    //             <li>
    //                 <p className="text-lg">2. How many variations do you want to see?</p>
    //                 <em>Increasing this number will result in a longer wait time</em>
    //             </li>
    //             <li>
    //                 <p className="text-lg">3. Select any of the initial creation thumbnails to upsample (get higher-quality/larger images)</p>
    //                 <em>If you don't like any of the thumbnails, change your Prompt or hit Re-Submit </em>
    //             </li>
    //             <li>
    //                 <p className="text-lg">4. <a href="https://">Share</a> your favorite creations</p>
    //                 <em>Assuming I make it this far 😛</em>
    //             </li>
    //         </ol>
    //         <div></div>

    //     </div >
    // )

    return (
        <form action="" className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
                <label htmlFor="" className="block uppercase tracking-wide text-gray-700 text-sx font-bold mb-2">
                    Creation Prompt
                </label>
                <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-prompt" />
            </div>
        </form>
    )
}

export default PromptForm