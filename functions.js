var PLAYER_TIME;
var IA = false;
var marks;
var btnIA = document.getElementById("buttonIA");
var restartBtn = document.getElementById('button');
const casas = document.querySelectorAll('.casa');
var statusGame = document.getElementById("resultado");
const WINS_POSSIBLE = [
[1,2,3],
[4,5,6],
[7,8,9],
[1,5,9],
[3,5,7],
[1,4,7],
[2,5,8],
[3,6,9]
];


function init(){

    btnRestart()
    PLAYER_TIME = 'X';
    marks = [];
    casas.forEach((item, index) => {
        //console.log(index,item)
        item.addEventListener('click', marcar)
        
    })

    btnIA.addEventListener("click", activeIA);

    
}

function activeIA(){
    IA = !IA;
    IA ? btnIA.innerHTML = "MAQUINA: ON" : btnIA.innerHTML = "MAQUINA: OFF";
    
}

function IAPlay(){
    console.log("IA JOGOU")
    changePlayer();
}

function btnRestart(hide = false){

    if(hide) return restartBtn.style="display:inline-block;";
    restartBtn.style="display:none;"
    restartBtn.addEventListener('click', restartGame, {once:true});

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

            statusGame.innerHTML = `'${PLAYER_TIME}' WINNER`
            endGame();
            btnRestart(true)

        } else{

            if(isDraw()){
                // Jogo empatou
                statusGame.innerHTML = "EMPATE!";
                btnRestart(true)

            }else{
                // Jogo continua (Sem empate, sem Vitoria) jogadas disponiveis ainda.
                changePlayer();
                if(PLAYER_TIME == "O" && IA) IAPlay();

            }
            
        }

        

    } else { // EVITA JOGADA INDEVIDA

        alert("Jogada indevida!")

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

const restartGame = (e)=> {

    init();
    casas.forEach((casa)=>{
        casa.innerHTML = "";
    })
    statusGame.innerHTML = "JOGO DA VELHA"

}

init();