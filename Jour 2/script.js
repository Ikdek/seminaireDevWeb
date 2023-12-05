// ███████╗██╗   ██╗███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
// ██╔════╝██║   ██║████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
// █████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
// ██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
// ██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
// ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
                                                                          
function nombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

function submit() {
    var input = document.querySelector("#guess");
    var inputValue = parseInt(input.value);
    
    numberGuess += 1;
    if (inputValue == randomPrice){
        affich.innerText  = `Vous avez trouver ! ${randomPrice} etait bien le juste prix ! Vous l'avez devinez en ${numberGuess} d'essai soit un taux de réussite de ${Math.floor(1/numberGuess*100)} % Pour ${randomGuess}`
    }else if (inputValue < randomGuess){
        affich.innerText  = "C'est Plus"
    }else{
        affich.innerText  = "C'est Moins"
    }
    

    
}


// ██╗   ██╗ █████╗ ██████╗ 
// ██║   ██║██╔══██╗██╔══██╗
// ██║   ██║███████║██████╔╝
// ╚██╗ ██╔╝██╔══██║██╔══██╗
//  ╚████╔╝ ██║  ██║██║  ██║
//   ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝
                         

var submitButton = document.querySelector("#submit");
var prix = {
    ["iphone"] : 969,
    ["icetea"] : 1,
    ["cookeo"] : 199
}
var keys = Object.keys(prix);
var randomIndex = Math.floor(Math.random() * keys.length);
var randomGuess = keys[randomIndex];
var numberGuess = 0
var affich = document.querySelector("#affich")
var randomPrice = prix[randomGuess]
var photo = document.querySelector("#myImage")
photo.src = `C:/Users/srshi/Desktop/seminaireDevWeb/Jour2/${randomGuess}`;
affich.innerText  = randomGuess 



// ████████╗███████╗███████╗████████╗
// ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝
//    ██║   █████╗  ███████╗   ██║   
//    ██║   ██╔══╝  ╚════██║   ██║   
//    ██║   ███████╗███████║   ██║   
//    ╚═╝   ╚══════╝╚══════╝   ╚═╝   
                                  

submitButton.addEventListener("click", submit);
console.log(randomGuess)