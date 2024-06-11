let value="x";
const winningpatterns=[[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];
let buttons=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg=document.querySelector(".winner");
let clicks=0;


buttons.forEach((button)=>{
    button.addEventListener("click",
    ()=>{
        if (value==="x" && button.innerText==="")
            {
                button.innerText="o";
                value="o";
                clicks++;
            }
        else if(value==="o" && button.innerText==="")
            {
                button.innerText="x";
                value="x";
                clicks++;
            }
        checkWinner();    
    }
)
});

const checkWinner=()=>{
    for(pattern of winningpatterns)
        {
            if(buttons[pattern[0]].innerText==="x" && buttons[pattern[1]].innerText==="x" && buttons[pattern[2]].innerText==="x")
                {
                    showWinner("X is the winner");
                }
            else if(buttons[pattern[0]].innerText==="o" && buttons[pattern[1]].innerText==="o" && buttons[pattern[2]].innerText==="o")
                {
                    showWinner("O is the winner");
                }
            else if(clicks===9)
                {
                    showWinner("Game was Draw");
                }
        }
}
reset.addEventListener("click",()=>{
    clicks=0;
    buttons.forEach((button)=>{button.innerText="";});
    msg.style.visibility="hidden";
    buttons.forEach((button)=>{
        button.disabled=false;
    });
});

const showWinner=(winner)=>{
    clicks=0;
    msg.innerHTML=`<h1>${winner}</h1>`;
    msg.style.visibility="visible";
    buttons.forEach((button)=>{
        button.disabled=true;
    });
}
