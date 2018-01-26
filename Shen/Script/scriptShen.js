var text = document.getElementById("text").value;
var img = "./img/";
var num, num2;

function con(){
    text = document.getElementById("text").value;
    cls();
    num = parseInt(text);
    if (num <= 10){
        write(num, 1);
    }
    else if (num > 10){
            if (num % 10 != 0)
                write (num % 10, 1);
            num2 = parseInt(num / 10);
            if (num2 != 1)
                switch(num % 10){
                    case 0: write(10, 1); write(num2, 2);break;
                    case 4:
                    case 6:
                    case 7:
                    case 8: write(10, 3); write(num2, 4);break;

                    case 1:
                    case 2:
                    case 3:
                    case 5: write(10, 2); write(num2, 3);break;

                    case 9: write(10, 4); write(num2, 5);break;
                    
                }
                else{`write(10, 2); write(num, 1);`
                switch(num % 10){
                    case 4:
                    case 6:
                    case 7:
                    case 8: write(10, 2); write(num, 1);break;

                    case 1:
                    case 2:
                    case 3:
                    case 5: write(10, 3); write(num, 1);break;

                    case 9: write(10, 4); write(num, 1);break;
                    
                }
                }
        }
    console.log(num % 10);
    //document.getElementById("img" + "4").src = img + '0.png';
}

function cls(){
    document.getElementById("img" + "1").src = img + 'null.png';
    document.getElementById("img" + "2").src = img + 'null.png';
    document.getElementById("img" + "3").src = img + 'null.png';
    document.getElementById("img" + "4").src = img + 'null.png';
    document.getElementById("img" + "5").src = img + 'null.png';
}

function write(N, id){
    switch(N){
        case 0:
            document.getElementById("img" + id).src = img + '0.png';
        break;
        case 1:
            document.getElementById("img" + id).src = img + '1.png';
        break;
        case 2:
            document.getElementById("img" + id).src = img + '2.png';
        break;
        case 3:
            document.getElementById("img" + id).src = img + '3.png';
        break;
        case 4:
            document.getElementById("img" + id).src = img + '2.png';
            document.getElementById("img" + (id + 1)).src = img + '2.png';
        break;
        case 5:
            document.getElementById("img" + id).src = img + '5.png';
        break;
        case 6:
            document.getElementById("img" + id).src = img + '5.png';
            document.getElementById("img" + (id + 1)).src = img + '1.png';
        break;
        case 7:
            document.getElementById("img" + id).src = img + '5.png';
            document.getElementById("img" + (id + 1)).src = img + '2.png';
        break;
        case 8:
            document.getElementById("img" + id).src = img + '5.png';
            document.getElementById("img" + (id + 1)).src = img + '3.png';
        break;
        case 9:
            document.getElementById("img" + id).src = img + '5.png';
            document.getElementById("img" + (id + 1)).src = img + '2.png';
            document.getElementById("img" + (id + 2)).src = img + '2.png';
        break;
        case 10:
            document.getElementById("img" + id).src = img + '10.png';
        break;
    }
}