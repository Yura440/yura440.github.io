var T = 1;
function MenuButton(){
    /*var A = document.getElementById("DivMenu").style.width;
    
    if (A == 120)
        A = 0;
    else
        A = 120;

    document.getElementById("DivMenu").style.width = A;*/
    if (T == 1){
        /*for (var i = 120; i > 0; i--){*/
            document.getElementById("DivMenu").style.width = 0;
    /*}*/
    }
    if (T == 2)
        document.getElementById("DivMenu").style.width = "120px";

    if (T == 1)
        T = 2;
    else
        T = 1;
}

function MouseOver(id){
    var Text;
    var h = document.getElementById("TextMain");
    switch(id){
        case 1: Text = "Узнать цвет глаз"; break;
        case 2: Text = "Узнать цвет волос"; break;
        case 3: Text = "Узнать цвет кожи"; break;
        case 4: Text = "Узнать группу крови"; break;
        default: Text = "Что вы хотите узнать?"; break;
    }

    h.innerHTML = Text;
}