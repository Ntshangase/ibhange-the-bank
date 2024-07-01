import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountData from "../Components/AccountData";

function Homepage() {
	const [zulu, setzulu] = useState(null);

	// fetch(
	// 	"https://raw.githubusercontent.com/bash-alt/fullstack-takehome-test/main/data.json"
	// )
	// 	.then((response)=>{
  //     setzulu(response.data);
  //   })
	// 	.then((error) => {
  //     console.log(error);
  //   });

	useEffect(() => {
		axios
			.get(
				"https://raw.githubusercontent.com/bash-alt/fullstack-takehome-test/main/data.json"
			)
			.then((response) => {
				// console.log(response.data);
				setzulu(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div>
			<div className="homepage">Homepage</div>
			{zulu && <AccountData zulu={zulu} />}
		</div>
	);
}

export default Homepage;
