import React from "react";
import "../../Styles/components/AboutCard.css";


function AboutCard(props) {
    
	return (
		<>
			<div className="AboutCard">
				<div className="AboutCard-title">{props.title}</div>
				<div className="AboutCard-container">
					{props.data.map((unit, index) => (
						<div className="About_card" key={index}>
							<div className="AboutCard-img">
                                <img src={unit.img} alt="img" className="imgs"></img>
                            </div>
							<div className="AboutCard-item" key={index}>
								<div className="AboutCard-item-title">
									{unit.heading}
								</div>
								<div className="AboutCard-item-desc">
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
