var bitch=document.getElementById("btn");
var num=document.getElementById("ye");		
var kill=document.getElementById("kill");
var ci=document.getElementById("ci");
num.oninput=pp;
var killer;
var civi;	
function pp(){

var Oinput=num.value;//获取玩家数量
console.log(Oinput);
if(isNaN(Oinput)||Oinput<4||Oinput>18){
confirm("请输入正确的玩家数量");
}else if(Oinput>=4&&Oinput<=5){//这里可以考虑for循环
  killer=1;
  civi=parseInt(Oinput)-killer;
    console.log(2)
    kill.innerHTML="杀手"+killer+"人" 
ci.innerHTML="平民"+civi+"人" 
}
else if(Oinput>=6&&Oinput<=8){
killer=2;
civi=parseInt(Oinput)-2;
kill.innerHTML="杀手"+killer+"人" 
ci.innerHTML="平民"+civi+"人" 
}else if(Oinput>=9&&Oinput<=11){
killer=3;
civi=parseInt(Oinput)-3;
kill.innerHTML="杀手"+killer+"人" 
ci.innerHTML="平民"+civi+"人" 
}else if(Oinput>=12&&Oinput<=15){
killer=4;
civi=parseInt(Oinput)-4;
kill.innerHTML="杀手"+killer+"人" 
ci.innerHTML="平民"+civi+"人" 
}else if(Oinput>=16&&Oinput<=18){
killer=5;
civi=parseInt(Oinput)-5;
kill.innerHTML="杀手"+killer+"人" 
ci.innerHTML="平民"+civi+"人" 
}
}


function ArrNum(){
var part=[];
for(var k=0;k<killer;k++){
part.push("杀手");
console.log(88)
}
for(var c=0;c<civi;c++){
part.push("平民");
console.log(99)
}
return part;
}
//数组乱序
function send(){
var sum=ArrNum();
var len=sum.length;
for(var i=0;i<len-1;i++){
var index=Math.floor(Math.random()*(len-i));
var temp=sum[index];
sum[index]=sum[len-i-1];
sum[len-i-1]=temp;
}
return sum;
}
function deal(){
var c=send();
var p=num.value;
if(c.length==p){
window.location.href="桌游精灵发牌页.html"
}
}
//去发牌
bitch.onclick=deal;

