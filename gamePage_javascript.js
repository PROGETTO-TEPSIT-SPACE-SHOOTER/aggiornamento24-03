$(document).ready(function(){
    $("div.divNavs p").hide();

    $("img.navs").mouseover(function(event){
        $(event.target).parent().toggleClass("bordoNav");
        $(event.target).css("margin-left", "-=2px");
        $(event.target).css("margin-top", "-=2px");
        $(event.target).next().show();
    });

    $("img.navs").mouseout(function(event){
        $(event.target).parent().toggleClass("bordoNav");
        $(event.target).css("margin-left", "+=2px");
        $(event.target).css("margin-top", "+=2px");        
        $(event.target).next().hide();
    });
});