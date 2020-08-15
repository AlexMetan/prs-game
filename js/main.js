// weapon types/fontawasome icons
const weaponsIconClass=[
    'rock', 
    'paper',
    'peace'
];

const weapons=document.querySelectorAll('[type]');
// add event listener for each btn
weapons.forEach(weapon=>{
    weapon.onclick=()=>{
        chooseWeapon(weapon);
    }
})
function chooseWeapon(weapon){
    // get player weapon type
    const weaponType=weapon.getAttribute('type');

    showIconOnGameArea("player",weaponType);
    randomOpponentWeapon(weaponType);
}
function randomOpponentWeapon(playerWeaponType){
    //  generate weapon type 0-3
    const weaponType=Math.floor((3) * Math.random());

    showIconOnGameArea("opponent",weaponType);
    findWinner(parseInt(playerWeaponType),weaponType);
}

// show weapon on game area
function showIconOnGameArea(name,weaponType){
    const area=document.querySelector(`[${name}]`);
    area.innerHTML=`<i class="far fa-hand-${weaponsIconClass[weaponType]}"></i>`;
}
// getWinner
function findWinner(playerWeapon,opponentWeapon){
    if(playerWeapon===opponentWeapon)
        showState("Tie!");
    else if(playerWeapon===0){
        if(opponentWeapon===1) showState("You Win!");
        else showState("You Lose!");
    }
    else if(playerWeapon===1){
        if(opponentWeapon===0) showState("You Win!");
        else showState("You Lose!");
    }
    else if(playerWeapon===2){
        if(opponentWeapon===1) showState("You Win!");
        else showState("You Lose!");
    }
}
function showState(state){
    const stateElement=document.querySelector('#state');
    stateElement.innerHTML=state; 
}