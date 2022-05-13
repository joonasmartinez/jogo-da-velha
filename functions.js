

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
                this.changePlayer()
                winner()
            }
            
           
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

function winner(){

        casas.forEach((item, index)=>{
            if(item.innerHTML != ""){
                
                WINS_POSSIBLE.forEach((itemWin, indexWin)=>{
                    console.log(item.id[itemWin[0]])
                   //console.log(itemWin[0], itemWin[1], itemWin[2])
                    //console.log(casas[itemWin[indexWin]].innerHTML)
                    // console.log(parseInt(item.id.replace('casa','')))
                    //console.log("Casa "+item.id+" "+item.innerHTML)
                    //if(item[itemWin[indexWin]])
            });
            }
        })
    
}

function whoWin(){

}