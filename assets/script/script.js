$(".menu > ul > li").mouseover(function(){
    $(".menu>ul>li>ul").stop().fadeIn(400);
})
$(".menu > ul > li").mouseout(function(){
    $(".menu>ul>li>ul").stop().fadeOut(100);
})

// $(".menu > ul > li").mouseover(function(){
//     $(this).find(".submenu").stop().slideDown(200);
// })
// $(".menu > ul > li").mouseout(function(){
//     $(".menu>ul>li>ul").stop().slideUp(300);
// })

// $(".menu > ul > li").mouseover(function(){
//     $(this).find(".submenu").show();
// })
// $(".menu > ul > li").mouseout(function(){
//     $(".menu>ul>li>ul").stop().hide();
// })

// $(function(){
//     let index = 0;
//     $(".slider").hide().first().show();

//     setInterval(() => {
//         let nextIndex = (index + 1) % 3;
//         $(".slider").eq(index).fadeOut(1200);
//         $(".slider").eq(nextIndex).fadeIn(1200);

//         index = nextIndex;
//     }, 3000);
// })

$(function(){
    let index = 0;
    $(".slider_wrap").append($(".slider").first().clone(true));

    setInterval(() => {
        index++;
        $(".slider_wrap").animate({marginTop:-300 * index}, 600)

        if(index === 3){
            setTimeout(function(){
                $(".slider_wrap").animate({ marginTop:0},0);
                index = 0;
            }, 700)
        }
    }, 3000);
})

$(".notice").click(function(){
    $(".notice").addClass("active");
    $(".gallery").removeClass("active");
    $(".board_n").show();
    $(".board_g").hide();
})

$(".gallery").click(function(){
    $(".gallery").addClass("active");
    $(".notice").removeClass("active");
    $(".board_g").show();
    $(".board_n").hide();
})


$(".popupBtn").click(function(){
    $(".popup").show();
})

$(".close").click(function(){
    $(".popup").hide();
})