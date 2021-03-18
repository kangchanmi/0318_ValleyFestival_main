$(function () {
    /* ////////////////////////////// GNB 메뉴 //////////////////////////////// */
    $("ul#mainMenu>li").mouseover(function () {
        $(this).children("ul").stop().fadeIn(300);
    });

    $("ul#mainMenu>li").mouseout(function () {
        $(this).children("ul").stop().fadeOut(300);
    });

    /* ////////////////////////////// 슬라이드 쇼 //////////////////////////////// */
    setInterval(fnSlide, 3000);

    function fnSlide() {
        $("#shuttleFrame").animate({
                "margin-left": "-800px"
            },
            1000,
            "swing",
            function () {
                $("#shuttleFrame a:first-child").insertAfter("#shuttleFrame a:last-child");
                $("#shuttleFrame").css({
                    "margin-left": "0"
                });
            });
    };

    /* ////////////////////////////// 모달레이어 팝업 //////////////////////////////// */
    $("div.tabContents li.notice1:first-child").click(function () {
        $("#modalLayerBG").css({
            "display": "block"
        });
    });

    $("div#modalLayerBG button#closeBtn").click(function () {
        $("div#modalLayerBG").css({
            "display": "none"
        });
    });
}); /* $(function() ) {  } */
