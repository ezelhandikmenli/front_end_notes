$("#p1").click(function(){
    setTimeout(function(){
        $("#kayit").hide(2000).fadeOut(2000,function(){
            $("#giris").show(2000).fadeIn(2000);
        });
    },500);
});
$("#p2").click(function(){
    setTimeout(function(){
        $("#giris").hide(2000).fadeOut(2000,function(){
            $("kayit").show(2000).fadeIn(2000);
        });
    },500);
});
