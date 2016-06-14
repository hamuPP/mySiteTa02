/**
 * Created by ty on 2016/2/1.
 */
;$(function(){

    $("#IENotice a").click(function(e){
        e = e || window.event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }
        $("#IENotice").hide();

    });
    //取消鼠标右键菜单
    //document.oncontextmenu=function(){
    //    return false;
    //};

    /*cards gallery*/
    $("#carousel-example-generic").on('slide.bs.carousel', function () {
        var carouselData = $(this).data('bs.carousel'),
            currentIndex = carouselData.getActiveIndex(),
            nextIndex = currentIndex + 1,
            items = carouselData.$items,
            cardsGalleryTitle = $("#cardsGalleryTitle"),
            cardsGalleryText = $("#cardsGalleryText"),
            seeDetail = $("#seeDetail");


       // console.log(items);
        //console.log(currentIndex);
    });
    setTimeout(function(){
        $(".flex-item-1").dotdotdot({
            height: $(".flex-vertical-wrapper").height(),
            //height:290,
            after: "a.readmore"
        });
        //$(".small-cards-box").height($(".flex-vertical-wrapper").height());
    },100);
    console.log($("#imgWrap").height());
    console.log($(".flex-vertical-wrapper").height());
    console.log($(".flex-item-title").height());
    console.log($(".flex-vertical-wrapper").height() - $(".flex-item-title").height());
    var h = document.getElementById("imgWrap");
    var he = h.offsetHeight;
    //console.log(h);
    console.log(he);


});


