import {React} from 'react'
import styles from "../../styles/home.module.css"

const ChooseWeapon = ({weaponSelection}) => {

    const setMarker = (e) => {
        if (e.target.textContent === 'X') {
            weaponSelection("X")
        } else {
            weaponSelection("O")

        }
    }
    return (
        <div>
            <div className="row py-3">
				<div className="col text-center">
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
						<div onClick={setMarker} className={`${styles['bg-weapon']} ${styles['btn-hover']} m-2 text-center`} style={{color: 'yellow'}}>X</div>
						<div onClick={setMarker} className={`${styles['bg-weapon']} ${styles['btn-hover']} m-2 text-center`} style={{color: 'rgb(4, 156, 226)'}}>O</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default ChooseWeapon;
