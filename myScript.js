const array=[];
// const cross=[];
// const circle=[];


let box_number = 0;
let prev_box_number= 0;
let cross_disable = 0;
let circle_disable = 0;
let cross ="";
let circle="";

// Winning condition arrays
let circle_win_cases=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];
let circle_traveler = 0;


// end Winning condition arrays



console.log(box_number);
console.log(prev_box_number);
console.log(array);

function select_box_1(){
    box_number = 1;
    console.log(box_number);
    
    if(box_number == 1){
        document.getElementById("box-" + box_number).style.backgroundColor='skyblue'; 
         
    }
    if(prev_box_number > 0 && prev_box_number!= 1){
        document.getElementById("box-" + prev_box_number).style.backgroundColor='white';   
    }
    prev_box_number = 1;
    console.log(array);
    console.log(cross);
    console.log(circle);
    // console.log(box);
    console.log(circle_traveler);
    
      
}
function select_box_2(){
    box_number = 2;
    console.log(box_number);
    console.log(prev_box_number);
    if(box_number == 2){
        document.getElementById("box-" + box_number).style.backgroundColor='skyblue';
    }
    if(prev_box_number > 0 && prev_box_number!= 2){
        document.getElementById("box-" + prev_box_number).style.backgroundColor='white';       
    }
    prev_box_number = 2;
}
function select_box_3(){
    box_number = 3;
    console.log(box_number);
    if(box_number == 3){
        document.getElementById("box-" + box_number).style.backgroundColor='skyblue';
    }
    if(prev_box_number > 0 && prev_box_number!= 3){
        document.getElementById("box-" + prev_box_number).style.backgroundColor='white';       
    }
    prev_box_number = 3;
}
function select_box_4(){
    box_number = 4;
    console.log(box_number);
    if(box_number == 4){
        document.getElementById("box-" + box_number).style.backgroundColor='skyblue';
    }
    if(prev_box_number > 0 && prev_box_number!= 4){
        document.getElementById("box-" + prev_box_number).style.backgroundColor='white';       
    }
    prev_box_number = 4;
}
function select_box_5(){
    box_number = 5;
    console.log(box_number);
    if(box_number == 5){
        document.getElementById("box-" + box_number).style.backgroundColor='skyblue';
    }
    if(prev_box_number > 0 && prev_box_number!= 5){
        document.getElementById("box-" + prev_box_number).style.backgroundColor='white';       
    }
    prev_box_number = 5;
}
function select_box_6(){
    box_number = 6;
    console.log(box_number);
    if(box_number == 6){
        document.getElementById("box-" + box_number).style.backgroundColor='skyblue';
    }
    if(prev_box_number > 0 && prev_box_number!= 6){
        document.getElementById("box-" + prev_box_number).style.backgroundColor='white';       
    }
    prev_box_number = 6;
}
function select_box_7(){
    box_number = 7;
    console.log(box_number);
    if(box_number == 7){
        document.getElementById("box-" + box_number).style.backgroundColor='skyblue';
    }
    if(prev_box_number > 0 && prev_box_number!= 7){
        document.getElementById("box-" + prev_box_number).style.backgroundColor='white';       
    }
    prev_box_number = 7;
}
function select_box_8(){
    box_number = 8;
    console.log(box_number);
    if(box_number == 8){
        document.getElementById("box-" + box_number).style.backgroundColor='skyblue';
    }
    if(prev_box_number > 0 && prev_box_number!= 8){
        document.getElementById("box-" + prev_box_number).style.backgroundColor='white';       
    }
    prev_box_number = 8;
}
function select_box_9(){
    box_number = 9;
    console.log(box_number);
    if(box_number == 9){
        document.getElementById("box-" + box_number).style.backgroundColor='skyblue';
    }
    if(prev_box_number > 0 && prev_box_number!= 9){
        document.getElementById("box-" + prev_box_number).style.backgroundColor='white';       
    }
    prev_box_number = 9;
}

function draw_circle(){
    if(array.includes(box_number) == false && circle_disable == 0){
        var g= document.getElementById("box-" + box_number).src='circle.png';
        console.log(g);
        array.push(box_number);
        // circle.push(box_number);
        circle_disable = 1;
        cross_disable = 0;
        circle += box_number;

        
        if(array.includes(box_number) == true && (box_number==2 || box_number==4 || box_number==5)){
            circle_traveler += 0.5;
        }

    }
   
}

function draw_cross(){
    if(array.includes(box_number) == false && cross_disable == 0){
    var g= document.getElementById("box-" + box_number).src='cross.png';
    console.log(g);
    array.push(box_number);
    // cross.push(box_number);
    cross_disable = 1;
    circle_disable = 0;
    cross += box_number;
    }
 }

