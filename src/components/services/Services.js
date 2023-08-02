import React from "react";
import Subtitle from "../subtitle/Subtitle";
import Card from "../card/Card";

function Services() {
	const servicesList = [
		{
			id: 1,
			image: "",
			itemList: [
				"Personal Training",
				"Small Group Training",
				"Virtual Classes",
			],
		},
	];
	return (
		<div>
			<Subtitle text={"Services We Provide"} />
			{servicesList.map((service) => (
				<Card key={service.id} service={service} />
			))}
		</div>
	);
}

export default Services;
