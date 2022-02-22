import { NextComponentType } from "next";
import { useState } from "react";
import UpsampleForm from "./UpsampleForm";

enum PromptSubmissionStatus {
	NOT_SUBMITTED = "NOT_SUBMITTED",
	SUBMITTING = "SUBMITTING",
	GOOD_SUBMISSION = "GOOD_SUBMISSION",
	ERROR_SUBMISSION = "ERROR_SUBMISSION",
}

const PromptForm: NextComponentType = () => {
	// return (
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
	const [promptStatus, setPromptStatus] = useState<PromptSubmissionStatus>(
		PromptSubmissionStatus.NOT_SUBMITTED
	);

	return (
		<form action="" className="self-center w-10/12 border border-purple-500">
			<div className="flex flex-wrap border border-yellow-500">
				<div id="form-prompt-section" className="w-full px-3 mb-3">
					<label
						htmlFor="prompt"
						className="block uppercase tracking-wide text-gray-700 text-sx 
						font-bold mb-2"
					>
						Creation Prompt
					</label>
					<input
						required
						type="text"
						className="appearance-none block w-full bg-gray-200 text-gray-700
						 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						name="prompt"
						placeholder="A dog with a birthday hat"
					/>
					<p className="text-gray-500 text-xs italic">
						Your only limitation is your imagination
					</p>
				</div>
				<div id="form-variations-section" className="w-1/2 px-3 mb-6">
					<label
						htmlFor="variations"
						className="block uppercase tracking-wide text-gray-700 text-sx 
						font-bold mb-2"
					>
						Number of Variations
					</label>
					<input
						required
						type="number"
						name="variations"
						id="promptvariations"
						defaultValue={3}
						min={1}
						max={5}
						className="appearance-none block w-full bg-gray-200 text-gray-700
						 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
						 out-of-range:border-red-500 out-of-range:text-pink-600 in-range:border-green-500"
					/>
					<p className="text-gray-500 text-xs italic">
						Choose between 1 and 5 variants. Larger number = longer wait time
					</p>
				</div>
				<div id="form-submit-section" className="w-1/2 px-3 mb-6 md:mb-0">
					<label
						htmlFor="prompt-submit"
						className="block uppercase tracking-wide text-gray-700 text-sx 
						font-bold mb-2"
					>
						{[
							PromptSubmissionStatus.GOOD_SUBMISSION,
							PromptSubmissionStatus.ERROR_SUBMISSION,
						].includes(promptStatus)
							? "Re-"
							: ""}
						Submit Prompt!
					</label>
					<input
						name="prompt-submit"
						type="submit"
						className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
						onClick={async (e) => {
							e.preventDefault();
							let response = await fetch("/api/airtist");
							let foo = await response.json();
							console.log(foo);
							// fetch("/api/hello").then((res) => {
							// 	let foo = res.text();
							// 	console.log("received response", foo);
							// });
							setPromptStatus(PromptSubmissionStatus.GOOD_SUBMISSION);
						}}
						value="🤖👨‍🎨🚀"
					/>
				</div>
			</div>
			<UpsampleForm variations={5} submissions={false}></UpsampleForm>
		</form>
	);
};

export default PromptForm;
