let text=document.getElementById("text");
let char=document.getElementById("chars");
let words=document.getElementById("word");
let remain=document.getElementById("remain");
let sent=document.getElementById("sent")
function keyPress(){

    let str=text.value;
    char.textContent=str.length;
    remain.textContent=1000-str.length;
    words.textContent=str.split(" ").length
    sent.textContent=str.split(".").length-1;
    if(text.value.length>1000){
        text.value=String(text.value).substring(0,1000);
    }
}

let button=document.getElementById("button");
button.addEventListener("click",()=>{
    text.value="";
    char.textContent=0;
    remain.textContent=1000;
    words.textContent=0;
    sent.textContent=0;
})