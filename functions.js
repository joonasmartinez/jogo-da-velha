

var PLAYER_TIME = 'X';
var WINS_POSSIBLE = [
[1,2,3],
[4,5,6],
[7,8,9],
[1,5,9],
[3,5,7],
[1,4,7],
[2,5,8],
[3,6,9]
];
var X=[];
var O=[];
const casas = document.querySelectorAll('.casa');

init();
winner();

function init(){

    casas.forEach((item, index) => {
        //console.log(index,item)
        item.addEventListener('click', () => {
            
            if(validPlay(item)) {
                item.innerHTML = PLAYER_TIME;
                coutPlay(PLAYER_TIME)
                this.changePlayer()
                winner()
            } else { return console.log("Jogue apenas nos espaços vazios.")}
            
           
        })
    })

}

function changePlayer(){
    if(PLAYER_TIME === 'X') return PLAYER_TIME = 'O';

    if(PLAYER_TIME === 'O') return PLAYER_TIME = 'X';
}

function validPlay(local){
    return (local.innerHTML == '')
}

function coutPlay(player){

    if(player == 'X'){

        console.log("Player X jogou.")

    } else if(player == 'O'){

        console.log("Player O jogou.")

        
    }

}

function winner(){
  


        WINS_POSSIBLE.forEach((itemWin, indexWin)=>{
            let winner = [];
            // console.log(itemWin[0], itemWin[1], itemWin[2])
            casas.forEach((item, index)=>{
                
                for(let a = 0; a < 3; a++){

                    if(item.id.replace("casa", "") == itemWin[a]){
                        if(item.innerHTML != "") winner.push(item.innerHTML)
                    }
                }
                
                

            });
            console.log(winner.every(elem => elem == PLAYER_TIME))
            // if(winner.every(whoWin)) return alert(`${PLAYER_TIME} VENCEU!`)
            console.log(winner)

        });

}

function whoWin(player, index, array){
    return player == PLAYER_TIME;

}