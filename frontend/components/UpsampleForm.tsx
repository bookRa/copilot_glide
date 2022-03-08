import { NextComponentType } from "next";

type ISubmission = {
	variations: number;
	submissions: boolean; // TODO Make this Picture[]
};

const UpsampleForm: React.FC<ISubmission> = (props) => {
	const { variations, submissions } = props;

	let placeholders = [...Array(variations)];
	return (
		<>
			<h1>AIrtist Submissions</h1>
			{placeholders.map((_) => "placeholder ")}
		</>
	);
};

export default UpsampleForm;
