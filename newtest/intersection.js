var a=[1,2,3,4];
var b=[3,4,5,6];
var c=[];
for(var i=0;i<a.length;i++){
    for(var j=0;j<b.length;j++){
        if(a[i]==b[j]){
            c+=a[i];
        }
        else{
            continue;
        }
    }
}
console.log(c);