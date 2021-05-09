window.onload = () => {
    console.log(`%c JavaScript works!`,
        `background-color: yellow; font-weight: bold;`);
};

//window.prompt("Enter the size of your diamond as a number.");
let size = prompt("Enter the size of your diamond as a number.");
let x = Math.floor(size/2);
let str = "";
console.log(size);
console.log(x);
document.getElementById("box").innerHTML = str;
if(size%2 != 0){
    //odd number function
    for(i=0; i<size; i++){
        for(j=0; j<x; j++)
            str += " ";
        for(j=0; j<=i; j++)
            str += "*";
        str += "<br>";
        x--;
        i++;
    }
    x=0;
    for(i=size-2; i>0; i--){
        for(j=0; j<x; j++)
            str+= " ";
        for(j=0; j<i; j++)
            str += "*";
        str += "<br>";
        x++;
        i--;
    }
}
else {
    //even number function
}
document.getElementById("box").innerHTML = str;
