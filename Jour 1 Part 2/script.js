// // ████████╗ █████╗  ██████╗ 
// // ╚══██╔══╝██╔══██╗██╔════╝ 
// //    ██║   ███████║██║  ███╗
// //    ██║   ██╔══██║██║   ██║
// //    ██║   ██║  ██║╚██████╔╝
// //    ╚═╝   ╚═╝  ╚═╝ ╚═════╝ 
                          
// var arrBtn = document.getElementsByTagName("button");
// console.log(arrBtn);

// //  ██████╗██╗      █████╗ ███████╗███████╗
// // ██╔════╝██║     ██╔══██╗██╔════╝██╔════╝
// // ██║     ██║     ███████║███████╗███████╗
// // ██║     ██║     ██╔══██║╚════██║╚════██║
// // ╚██████╗███████╗██║  ██║███████║███████║
// //  ╚═════╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝
                                        
// var arrBtn2 = document.getElementsByClassName("monBouton");
// console.log(arrBtn2);

// // ██╗██████╗ 
// // ██║██╔══██╗
// // ██║██║  ██║
// // ██║██║  ██║
// // ██║██████╔╝
// // ╚═╝╚═════╝ 
           
// var arrBtn3 = document.getElementById("btn");
// console.log(arrBtn3);

// //  ██████╗ ██╗   ██╗███████╗██████╗ ██╗   ██╗███████╗███████╗██╗     ███████╗ ██████╗████████╗ ██████╗ ██████╗ 
// // ██╔═══██╗██║   ██║██╔════╝██╔══██╗╚██╗ ██╔╝██╔════╝██╔════╝██║     ██╔════╝██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗
// // ██║   ██║██║   ██║█████╗  ██████╔╝ ╚████╔╝ ███████╗█████╗  ██║     █████╗  ██║        ██║   ██║   ██║██████╔╝
// // ██║▄▄ ██║██║   ██║██╔══╝  ██╔══██╗  ╚██╔╝  ╚════██║██╔══╝  ██║     ██╔══╝  ██║        ██║   ██║   ██║██╔══██╗
// // ╚██████╔╝╚██████╔╝███████╗██║  ██║   ██║   ███████║███████╗███████╗███████╗╚██████╗   ██║   ╚██████╔╝██║  ██║
// //  ╚══▀▀═╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝╚══════╝╚══════╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝
                                                                                                             

// console.log(document.querySelector(".monBouton"));
// console.log(document.querySelectorAll(".monBouton"));

// ███████╗██╗   ██╗███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
// ██╔════╝██║   ██║████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
// █████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
// ██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
// ██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
// ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
                                                                          

function message(){
    console.log("Hello !");
}

function color(){
    if (btn.style.backgroundColor == "blue")
    {
        btn.style.backgroundColor = "red";
    }else{
        btn.style.backgroundColor = "blue";
    }
}

function color2(){
    if (btn.classList.contains("defaulBg") == true){
        btn.classList.remove("defaulBg");
        btn.classList.add("bgRed");

    }else{
        btn.classList.remove("bgRed");
        btn.classList.add("defaultBg");
    }
}

function scaleUp(){
    btn.style.transform = "scale(" + 2 + ")"
}

function rotateBtn(){
    rotate += 7200;  
    btn.style.transform = "rotate(" + rotate + "deg)";
}
function submit() {
    var buttons = document.querySelectorAll(".btn");
    var input = document.querySelector("#num");

    // Clear previous background colors
    buttons.forEach(button => {
        button.style.backgroundColor = "";
    });

    var inputValue = parseInt(input.value);

    for (var i = 0; i < buttons.length; i++) {
        if (i < inputValue - 1) {
            if (i >= inputValue - 4) {
                buttons[i].style.backgroundColor = "orange";
            } else {
                buttons[i].style.backgroundColor = "red";
            }
        } else if (i === inputValue - 1) {
            buttons[i].style.backgroundColor = "yellow";
        } else {
            if (i <= inputValue + 2) {
                buttons[i].style.backgroundColor = "blue";
            } else {
                buttons[i].style.backgroundColor = "green";
            }
        }
    }
}


// ██╗   ██╗ █████╗ ██████╗ 
// ██║   ██║██╔══██╗██╔══██╗
// ██║   ██║███████║██████╔╝
// ╚██╗ ██╔╝██╔══██║██╔══██╗
//  ╚████╔╝ ██║  ██║██║  ██║
//   ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝
                         

var btn = document.querySelector("#btn");
var rotate = 0;
var submitButton = document.querySelector("#submit");

// ████████╗███████╗███████╗████████╗
// ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝
//    ██║   █████╗  ███████╗   ██║   
//    ██║   ██╔══╝  ╚════██║   ██║   
//    ██║   ███████╗███████║   ██║   
//    ╚═╝   ╚══════╝╚══════╝   ╚═╝   
                                  

// console.log(btn);

// btn.addEventListener("click", message);

// btn.addEventListener("click", color);

// btn.addEventListener("click", scaleUp);

// btn.addEventListener("click", rotateBtn);

// btn.addEventListener("click", color2);

submitButton.addEventListener("click", submit);