import React from 'react'
import styles from '../../styles/gameBoard.module.css'

const GameBoard = ({selectedWeapon}) => {
    return (
        <div>
            <div className="row py-3">
                <div className="col text-center">
                  <h2>It's {selectedWeapon}'s turn</h2>
                </div>
            </div>
            <div>
                    <div className="row d-flex border-bottom ">
                        <div className={`${styles['weapon-mark']} col-4 p-5 border-white text-center`} style={{width:"200px"}}> X                    
                        </div>
                        <div className={`${styles['weapon-mark']} col-4 p-5 border-white text-center`} style= {{borderLeft: '1px solid white', borderRight: "1px solid white", width:"200px"}}>X           
                        </div>
                        <div className={`${styles['weapon-mark']} col-4 p-5 border-white text-center`} style={{width:"200px"}}>    X                
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className={`${styles['weapon-mark']} col-4 p-5 border-white text-center`} style={{width:"200px"}}>     X               
                        </div>
                        <div className={`${styles['weapon-mark']} col-4 p-5 border-white text-center`} style= {{borderLeft: '1px solid white', borderRight: "1px solid white", width:"200px"}}> X                 
                        </div>
                        <div className={`${styles['weapon-mark']} col-4 p-5 border-white text-center`} style={{width:"200px"}}>    X                
                        </div>
                    </div>
                    <div className="row">
                        <div className={`${styles['weapon-mark']} col-4 p-5 border-white text-center`} style={{width:"200px"}}>  X                  
                        </div>
                        <div className={`${styles['weapon-mark']} col-4 p-5 border-white text-center`} style= {{borderLeft: '1px solid white', borderRight: "1px solid white", width:"200px"}}>   X                 
                        </div>
                        <div className={`${styles['weapon-mark']} col-4 p-5 border-white text-center`} style={{width:"200px"}}>  X                  
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default GameBoard;