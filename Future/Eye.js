function timerFunction() {
    var OtvetBlue, OtvetBrown, OtvetGreen;
    var NumBlue, NumBrown, NumGreen;
    var Blue, Brown, Green;
    var EyeOjcOne, EyeOjcTwo;

    EyeOjcOne = document.getElementById("EyeOjcOne").value;
    EyeOjcTwo = document.getElementById("EyeOjcTwo").value;

    OtvetBlue = document.getElementById("OtvetBlue");
    OtvetBrown = document.getElementById("OtvetBrown");
    OtvetGreen = document.getElementById("OtvetGreen");

    /*NumBlue = document.getElementById("OtvetBlue").value;
    NumBrown = document.getElementById("OtvetBrown").value;
    NumGreen = document.getElementById("OtvetGreen").value;

    NumBlue = parseInt(NumBlue);
    NumBrown = parseInt(NumBrown);
    NumGreen = parseInt(NumGreen);*/

    /*if (EyeOjcOne == "Зелёный" && EyeOjcTwo == "Зелёный")
        {
            Brown = 0;
            Blue = 25;
            Green = 74;
        }
        else
            {
                Brown = 0;
                Blue = 0;
                Green = 0;
            }

    if (NumBlue < Blue)
        NumBlue++;
    else
        if (NumBlue > Blue)
            NumBlue--;

    if (NumBrown < Brown)
        NumBrown++;
    else
        if (NumBrown > Brown)
            NumBrown--;

    if (NumGreen < Green)
        NumGreen++;
    else
        if (NumGreen > Green)
            NumGreen--;

    OtvetBlue.innerHTML = NumBlue;
    OtvetBrown.innerHTML = NumBrown;
    OtvetGreen.innerHTML = NumGreen;*/

    if (EyeOjcOne == "Зелёный" && EyeOjcTwo == "Зелёный")
        {
            NumBlue = 25;
            NumBrown = 0;
            NumGreen = 75;
        }
        else
            if (EyeOjcOne == "Синий" && EyeOjcTwo == "Синий")
            {
                NumBlue = 99;
                NumBrown = 0;
                NumGreen = 1;
            }
            else
            if (EyeOjcOne == "Коричневый" && EyeOjcTwo == "Коричневый")
            {
                NumBlue = 6;
                NumBrown = 75;
                NumGreen = 19;
            }  
            else
            if (EyeOjcOne == "Зелёный" && EyeOjcTwo == "Синий" || EyeOjcOne == "Синий" && EyeOjcTwo == "Зелёный")
            {
                NumBlue = 50;
                NumBrown = 0;
                NumGreen = 50;
            }
            else
            if (EyeOjcOne == "Зелёный" && EyeOjcTwo == "Коричневый" || EyeOjcOne == "Коричневый" && EyeOjcTwo == "Зелёный")
            {
                NumBlue = 12;
                NumBrown = 50;
                NumGreen = 38;
            } 
            else
            if (EyeOjcOne == "Синий" && EyeOjcTwo == "Коричневый" || EyeOjcOne == "Коричневый" && EyeOjcTwo == "Синий")
            {
                NumBlue = 50;
                NumBrown = 50;
                NumGreen = 0;
            } 
        else
            {
                NumBlue = 0;
                NumBrown = 0;
                NumGreen = 0;
            }

    OtvetBlue.innerHTML = NumBlue;
    OtvetBrown.innerHTML = NumBrown;
    OtvetGreen.innerHTML = NumGreen;

    setTimeout(timerFunction, 50);
}
setTimeout(timerFunction, 50);