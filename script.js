let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
 let newgameBtn = document.querySelector("#new");
let turn0 = true; 
let msgc = document.querySelector(".msgc");
let msg = document.querySelector("#msg");
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame = () => {
    turn0 = true;
    count = 0;
     enableBoxes();
    msgc.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
       if(turn0) {
        box.innerText = "O";
        turn0 = false;
       }else{
        box.innerText = "X";
        turn0 = true;
       }
       box.disabled = true;
       count++;
      let iswinner =  checkWinner();

      if (count === 9 && !iswinner){
        gamedrow();
      }
    });
});

const gamedrow = () => {
    msg.innerText = `Game Was A Drow`;
    msgc.classList.remove("hide");
    disableBoxes();
};


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};



const showWinner = (pos1Val) => {
   msg.innerText = `Congratulations, Winner is ${pos1Val}`;
   msgc.classList.remove("hide");
    disableBoxes ();
};
 
const checkWinner = () => {
    for (let  pattern of winPatterns )  {
     
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    
     if(pos1Val != "" && pos2Val != "" && pos3Val  != "" ) {
        if (pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
        }
     }
    }
};

newgameBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click", resetgame); 