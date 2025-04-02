import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid min-vh-100 text-white d-flex flex-column align-items-center p-2" style={{background:'rgb(63, 62, 62)'}}>
           <div className="row">
				<div className="col">
		    		<h1>TicTacToe in React.js</h1>
				</div>
			</div>
			<div className="row py-3">
				<div className="col">
					<h2>Pick a Weapon</h2>
				</div>
			</div>
			<div className="row ">
				<div className="col-12">
					<div className="choose-weapon d-flex flex-column align-items-center justify-content-center p-5" style={{width:"100%",background:'rgb(41, 39, 39)'}}>
						<h3>Choose your weapon</h3>
						<div className="inputs-container d-flex">
							<input type="text" placeholder="Player 1 username"/>
							<input type="text" placeholder="Player 2 username" />
						</div>
						<div className="weapon-container d-flex "style={{fontSize:"70px"}}>
							<a className="btn-light m-2 text-center" style={{background:'rgb(65, 62, 62)', color: 'yellow', width: '100px'}}>X</a>
							<button className="m-2 text-center" style={{background:'rgb(65, 62, 62)', color: 'rgb(92, 178, 235)', width: '100px'}}>O</button>
						</div>
					</div>
				</div>
			</div>
		</div>

	
	);
};

export default Home;