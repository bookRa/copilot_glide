import type { NextApiRequest, NextApiResponse } from "next";

type AirtistSubmission = {
	name: string;
	submissions: string[];
};

const GLIDE_SERVER = "http://localhost:8000";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<AirtistSubmission>
) {
	// const response = await fetch(`${GLIDE_SERVER}/api/airtist`, {
	// 	method: "POST",
	// 	body: JSON.stringify({
	// 		prompt,
	// 	}),
	// });
	console.log("In airtist handler");
	console.log(req.body);
	setTimeout(() => {
		res.status(200).json({
			name: "John Doe",
			submissions: ["magnifique_1", "magnifique_2", "magnifique_3", "magnifique_4"],
		});
	}, 2000);
}
