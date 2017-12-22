// Основные сведения о пустом шаблоне см. в следующей документации:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Для отладки кода на странице загрузите его в cordova-simulate либо в эмулятор или на устройство Android: запустите приложение, задайте точки останова. 
// , а затем запустите "window.location.reload()" в консоли JavaScript.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Обработка событий приостановки и возобновления Cordova
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Платформа Cordova загружена. Выполните здесь инициализацию, которая требуется Cordova.

        var MenuBut = document.querySelector("#buttonMenu");
        MenuBut.addEventListener("click", clickMenu)
    };

    var menu2 = true;
    function clickMenu() {
        if (!menu2)
            document.getElementById("Menu2").style.left = -300 + "px";
        else
            document.getElementById("Menu2").style.left = 0;
        menu2 = !menu2;
    }

    function hrefGo(idHref) {
        switch (idHref) {
            case 1: location.href = 'https://goo.gl/3Ri2Tg'; break;
            case 2: location.href = 'https://goo.gl/saHJZg'; break;
            default: error(); break;
        }
    }

    function onPause() {
        // TODO: Это приложение приостановлено. Сохраните здесь состояние приложения.
    };

    function onResume() {
        // TODO: Это приложение активировано повторно. Восстановите здесь состояние приложения.
    };
} )();