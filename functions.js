
var PLAYER_TIME = 'X';
var marks = [];
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
const casas = document.querySelectorAll('.casa');

function init(){

    casas.forEach((item, index) => {
        //console.log(index,item)
        item.addEventListener('click', marcar)
        
    })
    
}

function changePlayer(){
    if(PLAYER_TIME === 'X') return PLAYER_TIME = 'O';

    if(PLAYER_TIME === 'O') return PLAYER_TIME = 'X';
}

function validPlay(local){

    return (local.innerHTML == '')
}

function cellElement(id){

    if(casas[id-1].innerHTML != "") return casas[id-1].innerHTML

}

function endGame(){
   
    casas.forEach((item, index)=>{
       item.removeEventListener("click", marcar)
    })

}

const marcar = (e)=>{
    
    if(validPlay(e.target)) { // VERIFICA SE É JOGADA VALIDA

        e.target.innerHTML = PLAYER_TIME
        marks.push(e.target.innerHTML)

        if(isWinner()){ // Verifica se há vitória

            console.log("vencedor", PLAYER_TIME)
            endGame();

        } else{

            if(isDraw()){

                console.log("EMPATE")

            }else{

                console.log("Sem vencedor")
                changePlayer();

            }
            
        }

        

    } else { // EVITA JOGADA INDEVIDA

        alert("JOGADA INDEVIDA")

    }

}

function isDraw(){

    return (marks.length == 9);

}

function isWinner(){

    return WINS_POSSIBLE.some((combination)=>{
        return combination.every((id)=>{
            return cellElement(combination[0]) == PLAYER_TIME && cellElement(combination[1]) == PLAYER_TIME && cellElement(combination[2]) == PLAYER_TIME
        })
    })

}

init();