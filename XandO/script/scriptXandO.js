var plaer = true;
var Start = true;
var Game = [0, 0, 0, 0, 0, 0, 0, 0, 0];
function clickX_O(idX_O){
    var hod = document.getElementById("div" + idX_O);
    if (Game[idX_O - 1] == 0 && Start){
        if (plaer){
            hod.className = "div"+ idX_O + " , clickX";
            Game[idX_O - 1] = 1;
        }
        else{
            hod.className = "div"+ idX_O + " , clickO";
            Game[idX_O - 1] = 2;
            }
        
        //alert(Game[idX_O]);
        testGame();
        plaer = !plaer;
        /*if (!plaer)
            Bot();*/
    }
}

function Bot(){
    if (Game[0] == 1 && Game[8] == 0)
        clickX_O(9);
        else
            if (Game[0] == 1 && Game[8] == 0)
                clickX_O(9);
    
    if (Game[0] == 1 && Game[8] == 2){
        if ((Game[1] == 1 || Game[3] == 1) && Game[2] == 0 && Game[6] == 0)
            clickX_O(3);
            else
            if (Game[5] == 0 && Game[2] == 2)
                clickX_O(6);
                else
                    if (Game[5] == 1 && Game[6] == 0)
                        clickX_O(7);
                        else
                            if (Game[4] == 1 && Game[7] == 0)
                                clickX_O(8);
                                else
                                    if (Game[4] == 0 && Game[7] == 1)
                                        clickX_O(5);
                                        else
                                        if (Game[2] == 2 && Game[7] == 0 && Game[4] == 0)
                                            clickX_O(5);

    }
}

function testGame(){
    for (i = 1; i <= 2; i++)
    {
        //y
        if (Game[0] == i && Game[3] == i && Game[6] == i){
            alert(i + " Выйграл");
            Start = false;
            break;
        }
        else
        if (Game[1] == i && Game[4] == i && Game[7] == i){
            alert(i + " Выйграл");
            Start = false;
            break;
        }
        else
        if (Game[2] == i && Game[5] == i && Game[8] == i){
            alert(i + " Выйграл");
            Start = false;
            break;
        }
        //x
        if (Game[0] == i && Game[1] == i && Game[2] == i){
            alert(i + " Выйграл");
            Start = false;
            break;
        }
        else
        if (Game[3] == i && Game[4] == i && Game[5] == i){
            alert(i + " Выйграл");
            Start = false;
            break;
        }
        else
        if (Game[6] == i && Game[7] == i && Game[8] == i){
            alert(i + " Выйграл");
            Start = false;
            break;
        }
        //X + Y
        if (Game[0] == i && Game[4] == i && Game[8] == i){
            alert(i + " Выйграл");
            Start = false;
            break;
        }
        else
        if (Game[2] == i && Game[4] == i && Game[6] == i){
            alert(i + " Выйграл");
            Start = false;
            break;
        }
    }
}