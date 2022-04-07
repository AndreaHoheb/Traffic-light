import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [selectedColor, setselectColor] = useState("red");

	return (
		<div className="Traffic">
			<div
				onClick={() => setselectColor("red")}
				className={
					"red light glow" + (selectedColor == "red" ? "glow" : "")
				}></div>
			<div
				onClick={() => setselectColor("yellow")}
				className={
					"yellow light" + (selectedColor === "yellow" ? "glow" : "")
				}></div>
			<div
				onClick={() => setselectColor("green")}
				className={
					"green light" + (selectedColor === "green" ? "glow" : "")
				}></div>
		</div>
	);
}

export default Home;
//onClick={()=> setSelectedColor("yellow")}
//onClick={()=> setSelectedColor("green")}
