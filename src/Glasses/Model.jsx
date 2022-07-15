import React from "react";

const Model = ({ product, isOpen = false }) => {
	return (
		<div className="col-md-6">
			<div
				style={{ width: "300px", height: "350px" }}
				className="mx-auto position-relative"
			>
				<img
					src="./glassesImage/model.jpg"
					alt="model"
					width="100%"
					height="100%"
				/>
				<img
					style={{ display: isOpen ? "block" : "none" }}
					className="img-glasses"
					src={product.url}
					alt="glasses"
					width="150px"
					height="50px"
				/>
			</div>
		</div>
	);
};

export default Model;
