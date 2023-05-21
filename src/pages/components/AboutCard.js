import React, { useState } from "react";
import "../../Styles/components/AboutCard.css";

function AboutCard(props) {
	const [size, sizeChange] = useState(props.small === "true");
	console.log(size);

	return (
		<>
			<div className="AboutCard">
				<div className="AboutCard-title">{props.title}</div>
				<div
					className={
						size
							? "AboutCard-container AboutCard-container-small"
							: "AboutCard-container "
					}
				>
					{props.data.map((unit, index) => (
						<div className="About_card" key={index}>
							<div
								className={
									size
										? "AboutCard-img small"
										: "AboutCard-img"
								}
							>
								<img
									src={unit.img}
									alt="img"
									className={size ? "imgs small" : "imgs"}
								></img>
							</div>
							<div className="AboutCard-item" key={index}>
								<div className="AboutCard-item-title">
									{unit.heading}
								</div>
								<div
									className={
										size
											? "AboutCard-item-desc desc-small"
											: "AboutCard-item-desc"
									}
								>
									{unit.description}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default AboutCard;
