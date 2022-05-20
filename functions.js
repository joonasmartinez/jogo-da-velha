var PLAYER_TIME;
var IA = false;
var playsPossible;
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
    playsPossible = WINS_POSSIBLE
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

function btnRestart(hide = false){

    if(hide) return restartBtn.style="display:inline-block;";
    restartBtn.style="display:none;"
    restartBtn.addEventListener('click', restartGame, {once:true});

}

function changePlayer(){

    PLAYER_TIME === 'X' ? PLAYER_TIME = 'O' : PLAYER_TIME = 'X';

}

function validPlay(local){

    return (local.innerHTML == '')
}

function cellElement(id){

    if(casas[id-1].innerHTML != "") return casas[id-1].innerHTML

}

function setCellElement(id){
    casas[id-1].click()
    
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
                // Jogo continua (Sem empate, sem Vitoria e jogadas disponiveis ainda.
                changePlayer();
                if(PLAYER_TIME == "O" && IA) IAcheck();

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
            return (cellElement(id) == PLAYER_TIME)
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

function IAmark(combination){
    let id=0;
    console.log(combination)
    combination.some((element)=>{
        if(cellElement(element) == undefined) id = element
        
    })
    setCellElement(id)
    

}

function IAcheck(){
    // Lógica: 2º X VAI GANHAR? | 1º O VAI GANHAR? se sim JOGAR ONDE PRECISA se não FORMAR ALGUM
    let aX = [];
    let aO = [];
    let init = [];
    WINS_POSSIBLE.forEach((combination)=>{
        let X=0;
        let O=0;
        combination.forEach((elements)=>{
            
            if(cellElement(elements) == 'X') X++;
            if(cellElement(elements) == 'O') O++;

            //if(X==2 || O==2) console.log(combination,elements, X, O)
        })
        aX.push(X);
        aO.push(O);
        
    })
    console.log(aX, aO)
    aO.forEach((element, index)=>{
        console.log(WINS_POSSIBLE[index],element, aX[index], index)
        if(element == 0){
            if(aX[index] <= 2 && aX[index] != 0) init.push(WINS_POSSIBLE[index])
        }
        
    })
    console.log(init)
    if(init.length > 0) IAcheckInit(init)
    
}

function IAcheckInit(init){
    let numbers = []
    init.forEach((element)=>{ element.forEach((num, i)=>{
    if(cellElement(num) == undefined) {
        numbers.push(num)
    }
    });  
})
IArandomPlay(numbers)
}

function IArandomPlay(combination){
    console.log("combinação",combination)
    let idPlay = []
    idPlay.push(combination[Math.floor(Math.random() * combination.length)])
    IAmark(idPlay)
}

init();