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
					selectedColor == "red" ? "red light glow" : "red light"
				}></div>
			<div
				onClick={() => setselectColor("yellow")}
				className={
					selectedColor == "yellow"
						? "yellow light glow"
						: "yellow light"
				}></div>
			<div
				onClick={() => setselectColor("green")}
				className={
					selectedColor == "green"
						? "green light glow"
						: "green light"
				}></div>
		</div>
	);
}

export default Home;
//onClick={()=> setSelectedColor("yellow")}
//onClick={()=> setSelectedColor("green")}
