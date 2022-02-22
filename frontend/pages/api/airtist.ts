import type { NextApiRequest, NextApiResponse } from "next";

type AirtistSubmission = {
	name: string;
	submissions: string[];
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<AirtistSubmission>
) {
	console.log("In airtist handler");
	console.log(req.body);
	res.status(200).json({
		name: "John Doe",
		submissions: ["magnifique_1", "magnifique_2", "magnifique_3", "magnifique_4"],
	});
}
