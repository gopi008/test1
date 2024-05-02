var a='madam';
var b='';
var c=a.length-1;
for(var i=c;i>=0;i--){
    b+=a.charAt(i);
}
// console.log(b);
if(a==b){
    console.log(true);
}
else{
    console.log(false);
}