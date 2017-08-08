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