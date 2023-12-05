var notes = [14,12,15,14,9,24,13,51,14,17,12]
function bulletin(arg){
    for (var i of notes){
        if (i < 10){
            console.log(`${i}  ---> Echec`);
        }
        else{
            console.log(`${i} ---> Réussi`);
        };
    };
};
bulletin(notes)

