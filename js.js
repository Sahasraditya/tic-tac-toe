
var winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//connect each button to position
var b0 = document.querySelector("#b0");
var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");
var b3 = document.querySelector("#b3");
var b4 = document.querySelector("#b4");
var b5 = document.querySelector("#b5");
var b6 = document.querySelector("#b6");
var b7 = document.querySelector("#b7");
var b8 = document.querySelector("#b8");

var currentPlayer = document.querySelector(".player-current h3")

var player1 = 1;
var X_array =[];
var O_array = [];
//what happens on clicking any button
function onClick(btn,num){
    btn.addEventListener("mouseover",() =>{
        btn.style.background = 'lightgray';
    })
    btn.addEventListener("mouseleave",() =>{
        btn.style.background = '';
    })
    btn.addEventListener("click",() =>{
        if (player1 ==1){
            btn.innerText = "X";
            currentPlayer.innerText = "O's turn"
            player1 =2 ;
            X_array.push(num);
            //console.log(X_array)
            if (X_array.length >= 3){
                checkWin(X_array,"X")
            }
        }
        else{
            btn.innerText = "O";
            currentPlayer.innerText = "X's turn"
            player1 =1 ;
            O_array.push(num);
            //console.log(O_array);
            if (O_array.length >= 3){
                checkWin(O_array,"O");
            }
        }
        btn.disabled = true;
       // player_array.push(num);
    
    })
}

var winnerText = document.querySelector(".Winner");
function checkWin(array,winner){
    array = array.sort();
    var arrays = getSubArrays(array);
    for (i=0;i<8;i++){
        if (isArrayInArray(arrays,winning_combinations[i]) == true)
            {
            console.log(winner.concat(" Wins"))
            winnerText.innerText = winner.concat(" Wins");
            const buttons = document.querySelectorAll(".b");
            for (const button of buttons) {
            button.disabled = true;
            }
            var rest = document.querySelector(".rest");
            const newButton = document.createElement('button');
            newButton.textContent = 'Play again!';
            rest.appendChild(newButton);
            newButton.addEventListener("click",() =>{
                window.location.reload();
            })
        }
    }   
}

//map button to position on grid and add to player array
function clickAndAdd(array){
let btn1 = document.querySelectorAll(".b");
    const dict1 = new Map();
    dict1.set(b0,0);
    dict1.set(b1,1);
    dict1.set(b2,2);
    dict1.set(b3,3);
    dict1.set(b4,4);
    dict1.set(b5,5);
    dict1.set(b6,6);
    dict1.set(b7,7);
    dict1.set(b8,8);
    btn1.forEach(function(button){
        if (dict1.has(button)){
            onClick(button,dict1.get(button));
            
        }
    })

}

clickAndAdd([])

function getSubArrays(arr){
    var len = arr.length,
       subs = Array(Math.pow(2,len)).fill();
    return subs.map((_,i) => { var j = -1,
                                   k = i,
                                 res = [];
                               while (++j < len ) {
                                 k & 1 && res.push(arr[j]);
                                 k = k >> 1;
                               }
                               return res;
                             }).slice(1);
  }
  
//console.log((getSubArrays([1,2,3,4,5])));




function isArrayInArray(arr, targetArr) {
    return arr.some(subArr => JSON.stringify(subArr) === JSON.stringify(targetArr));
}

// let arr = getSubArrays([0,1,2,3,4]);
// arr = arr.sort()
// console.log(arr)
// for (i=0;i<8;i++){
//     console.log(winning_combinations[i])
//     if (isArrayInArray(arr,winning_combinations[i]) == true){
//         console.log('hello')
//     }
// }














