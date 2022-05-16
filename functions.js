
var PLAYER_TIME = 'X';
var win;
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
        if(isWinner()){ // Verifica se há vitória
        } else{
            console.log("Sem vencedor")
            changePlayer();
        }

        

    } else { // EVITA JOGADA INDEVIDA
        alert("Apenas nos locais vazios.")
    }

}

function draw(){

    //Função: Para cada DIV (casa) que contenha !EMPTY ++;
   let counting = 0;
   
    casas.forEach((casa, index)=>{

        if(casa.innerHTML != "") counting++;
        
        if(index == 8 && counting == 9){
            console.log(win)
            if(!(win)) document.getElementById("resultado").innerHTML = "EMPATE" 
        }
    })

}

function winner(){
  
            WINS_POSSIBLE.some((combination) =>{
                let analise = [];
                combination.some((idcasa)=>{
                    if(cellElement(idcasa) != undefined){
                        analise.push(cellElement(idcasa))
                    }
                })
                if(analise.length == 3){
                    win = true;

                    analise.some((num, i, arr) =>{
                        if(!(num==PLAYER_TIME)) win=false;
                    })

                    if(win){
                        endGame();
                        document.getElementById("resultado").innerHTML = (PLAYER_TIME == "O") ? "BOLINHA WINS" : "XIS WINS"
                    }
                    
                }})
                return win

}

function isWinner(){

    return WINS_POSSIBLE.some((combination)=>{
        return combination.every((id)=>{
            return cellElement(combination[0]) == PLAYER_TIME && cellElement(combination[1]) == PLAYER_TIME && cellElement(combination[2]) == PLAYER_TIME
        })
    })

}
init();