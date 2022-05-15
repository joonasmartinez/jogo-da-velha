

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
                countPlay(PLAYER_TIME)
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

function countPlay(player){

    if(player == 'X'){

        console.log("Player X jogou.")

    } else if(player == 'O'){

        console.log("Player O jogou.")

        
    }

}

function cellElement(id){

    if(casas[id-1].innerHTML != "") return casas[id-1].innerHTML

}

function winner(){
  
            WINS_POSSIBLE.some((combination) =>{
                //console.log(combination)
                let analise = [];
                combination.some((idcasa,x)=>{
                    analise.push(cellElement(idcasa))
                    if(analise.length == 2){
                        console.log(analise)
                    }
                    
                })
            })

}