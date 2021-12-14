
let str=" a  b cd ".split(" "); 

console.log(str); 

let s = ""; 

for(i=0; i<str.length; i++) { 
    if(str[i] !== " ") {  
        if(i != str.length-2 && str[i] != '') {
            s += str[i]+"%20";
        } else { 
            s+= str[i]
        } 
        console.log(s); }
    }