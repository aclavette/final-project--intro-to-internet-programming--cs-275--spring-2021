window.onload = () => {
    console.log(`%c JavaScript works!`,
        `background-color: yellow; font-weight: bold;`);
};

let str = ``;
let inputSize;

//fault-tolerant prompting function
let inquire = () => {
    let input = prompt(`Enter the size of your diamond as a number.`);
    if (input%1 != 0)
        inquire();
    else
        inputSize = input;
}

//called when user input is an even number
let evenDiamond = (size) => {
    //x determines the amount of white space on the line before asterisks begin
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
            str += `* `;
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
    //x determines the amount of white space on the line before asterisks begin
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

//diamond's current x-position
let curX = 0;
//amount of pixels moved each interval
let tick = 10;
//the first direction to move is right(positive number)
let direction = 1;

let slide = () => {
    let diamondWidth = document.getElementById(`diamond-container`).clientWidth;
    let viewport = window.innerWidth;
    let freeSpace = viewport - diamondWidth;
    curX += (direction*tick);

    /*each interval, the direction will turn negative and change directions
    if the diamond is at the end of the window.*/
    if(direction==1 && (curX+diamondWidth >= viewport))
    	direction *= -1;
    else if (direction==-1 && curX<=0)
    	direction *= -1;

    document.getElementById(`diamond-container`).style.left = curX + "px";
}

inquire();
if(inputSize%2 == 0)
    evenDiamond(inputSize);
else if(inputSize%2 != 0)
    oddDiamond(inputSize);
let interval = setInterval(slide, 50);
