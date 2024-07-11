// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let li=document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("Div was clicked");
// });

// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(l of li){
//     l.addEventListener("click",function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }

//to-do

// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// let inp=document.querySelector("input");
// let done=document.querySelectorAll(".delete");

// btn.addEventListener("click",function(){
//     let item=document.createElement("li");
//      item.innerText=inp.value;
     
//     let dlt=document.createElement("button");
//     dlt.innerText="Done";
//     dlt.classList.add("delete");
//     item.appendChild(dlt);
//     ul.appendChild(item);
//     console.log(inp.value);
//     inp.value="";
// });

// ul.addEventListener("click",function(event){
//     if(event.target.nodeName=="BUTTON"){
//         console.log("Delete");
//         let par=event.target.parentElement;
//         par.remove();
//     }
//     else{
//         console.log("Dont delete");
//     }
// });
// for(d of done){
//     d.addEventListener("click",function(){
//         console.log("Elementdeleted");
//         let par=this.parentElement;
//         par.remove();
//     });
// }

//simon-says
let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let start=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(start==false){
    console.log("game started");
    start=true;
    levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ran=Math.floor(Math.random()*3);
    let ranc=btns[ran];
    let ranb=document.querySelector(`.${ranc}`);
    gameSeq.push(ranc);
    btnFlash(ranb);
}

function checkAns(index){
    if(userSeq[index]===gameSeq[index]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText="GameOver Press any key to start";
        document.querySelector("body").classList.add("over");
        setTimeout(function(){
            document.querySelector("body").classList.remove("over");
        },500);
        reset();
    }
}

let allbtns=document.querySelectorAll(".btn"); 
function btnPress(){
    let btn=this;
    userFlash(btn);
    userc=btn.getAttribute("id");
    userSeq.push(userc);
    checkAns(userSeq.length-1);
}
for(b of allbtns){
    b.addEventListener("click",btnPress);
}
function reset(){
    
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}