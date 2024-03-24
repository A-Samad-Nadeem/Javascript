let count=0;

document.getElementById("increament").onclick=function(){
    count+=1
    document.getElementById("ginti") .innerHTML=count;
}
document.getElementById("reset").onclick=function(){
    count=0
    document.getElementById("ginti").innerHTML=count;
}
