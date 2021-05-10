window.onload = () => {
    console.log(`%c JavaScript works!`,
        `background-color: yellow; font-weight: bold;`);
};

let str = ``;
let inputSize = prompt(`Enter the size of your diamond as a number.`);

//called when user input is an even number
let evenDiamond = (size) => {
    let x = size-2;

    //top half of diamond
    for(i=0; i<=(size/2); i++){
        if(i==0){
            for(j=0; j<(size-1); j++)
                str += ` `;
            str += `*<br>`;
        }
        else{
            for(j=0; j<x; j++)
                str += ` `;
            for(j=0; j<(2*i); j++)
                str += `* `;
            str += `<br>`;
            x-=2;
        }
    }

    //bottom half of diamond
    x=2;
    for(i=(size/2)-1; i>=0; i--){
        if(i==0){
            for(j=0; j<(size-1); j++)
                str += ` `;
            str += `*`;
        }
        else {
            for(j=0; j<x; j++)
                str += ` `;
            for(j=0; j<(2*i); j++)
                str += `* `;
            str+= `<br>`
            x += 2;
        }
    }
    document.getElementById(`diamond-container`).innerHTML = str;
}

//called when user input is an odd number
let oddDiamond = (size) => {
    let x = Math.floor(size/2);

    //top half of diamond
    for(i=0; i<size; i++){
        for(j=0; j<x; j++)
            str += ` `;
        for(j=0; j<=i; j++)
            str += `*`;
        str += `<br>`;
        x--;
        i++;
    }

    //bottom half of diamond
    x=0;
    for(i=size-2; i>0; i-=2){
        for(j=0; j<x; j++)
            str+= ` `;
        for(j=0; j<i; j++)
            str += `*`;
        str += `<br>`;
        x++;
    }
    document.getElementById(`diamond-container`).innerHTML = str;
}

let curX = 0;
let tick = 10;
let direction = 1;

let slide = () => {
    let diamondWidth = document.getElementById(`diamond-container`).clientWidth;
    let viewport = window.innerWidth;
    let freeSpace = viewport - diamondWidth;
    curX += (direction*tick);

    if(direction==1 && (curX+diamondWidth >= viewport))
    	direction *= -1;
    else if (direction==-1 && curX<=0)
    	direction *= -1;

    document.getElementById(`diamond-container`).style.left = curX + "px";
}

if(inputSize%2 == 0)
    evenDiamond(inputSize);
else if(inputSize%2 != 0)
    oddDiamond(inputSize);
let interval = setInterval(slide, 50);
console.log(document.getElementById(`diamond-container`).clientWidth);
console.log(window.innerWidth);
