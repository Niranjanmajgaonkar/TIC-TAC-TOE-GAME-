
let box=document.querySelectorAll(".box");
var chance;
var atempt=0;
  box.forEach(function(btn){
    btn.addEventListener('click', function(){
        if(chance){
            btn.innerText="x";
            
            btn.disabled=true;
            chance=false;
            atempt++;
            if(atempt==9){
                alert('match is drwa');
            }
    }else{
        btn.innerText="o";
        chance=true;
        btn.disabled=true;
        atempt++
        if(atempt==9){
            alert('match is drwa');
        }
    }
    cheackwinner();

    });

});
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];    

// console.log(box[5]);

function cheackwinner(){

    for (let win of winpattern) {
        let first =box[win[0]].innerText;
        let second =box[win[1]].innerText;
        let third =box[win[2]].innerText;
     
        if(first !="" && second !="" && third !=""){
                     
            if(first == second && second == third){
                

                document.querySelector("#res").innerText ='winner is :- '+first;
            } 
        }
    }
}
    

let btn =document.querySelector("#RESET");
btn.addEventListener('click',function(){
location.reload();
});