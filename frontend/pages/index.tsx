import type { NextPage } from "next";
import AppHeader from "../components/AppHeader";
import PromptForm from "../components/PromptForm";

const Home: NextPage = () => (
	<div className="w-4/5 container flex flex-col justify-content-center mt-6 space-y-4 border border-green-800">
		<AppHeader />
		<PromptForm />
	</div>
);

export default Home;
