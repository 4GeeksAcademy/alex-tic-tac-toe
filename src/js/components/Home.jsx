import React, { useState } from "react";
import ChooseWeapon from "./ChooseWeapon";
import Title from "./Title";
import GameBoard from "./GameBoard";
//include images into your bundle

//create your first component
const Home = () => {
	const [selectedWeapon, setSelectedWeapon] = useState('')
	

	const weaponSelection = (weapon) => {setSelectedWeapon(weapon)}
	return (
		<div className="container-fluid min-vh-100 text-white d-flex flex-column align-items-center p-2" style={{background:'rgb(63, 62, 62)'}}>
			<Title/>
			{selectedWeapon !== '' ? <GameBoard selectedWeapon={selectedWeapon}/> : <ChooseWeapon weaponSelection={weaponSelection}/>} 	
		</div>

	
	);
};

export default Home;