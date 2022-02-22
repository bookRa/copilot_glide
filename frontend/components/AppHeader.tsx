import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextComponentType } from "next";

const AppHeader: NextComponentType = () => (
	< >
		<div className=" border border-blue-600 grid grid-cols-3 text-7xl font-bold">
			<div className="">
				<span className="float-right py-4">🖼️</span>
			</div>
			<h1 className="border-4 border-double text-center border-amber-600 py-4 ">
				<p>
					<span className="italic text-red-500">A</span>
					<FontAwesomeIcon className="text-orange-400" icon={faPaintBrush} />
					<span className="text-yellow-300">r</span>
					<span className="text-green-600">t</span>
					<span className="text-blue-600">i</span>
					<span className="text-indigo-600">s</span>
					<span className="text-violet-600">t</span>
				</p>
			</h1>
			<div className="py-4">
				<span className="float-left">🤖</span>
			</div>
		</div>
		<h2 className="text-center text-2xl">
			(Made with💖using{" "}
			<a
				className="hover:underline
                        hover:decoration-orange-400
                        text-blue-600 
                        visited:text-purple-900"
				href="https://copilot.github.com/"
			>
				<FontAwesomeIcon icon={faGithubAlt} /> CoPilot
			</a>{" "}
			and{" "}
			<a
				className="hover:underline
                        hover:decoration-indigo-600
                        text-red-500
                        visited:text-orange-600"
				href="https://gpt3demo.com/apps/openai-glide"
			>
				OpenAI GLIDE
			</a>
			)
		</h2>
	</>
);

export default AppHeader;
