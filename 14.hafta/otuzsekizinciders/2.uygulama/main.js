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
            $("#kayit").show(2000).fadeIn(2000);
        });
    },500);
});
$(document).ready(function() {
    $("#btn").click(function() {
        var name = $("#kullanici").val();
        var email = $("#email").val();
        var password = $("#sifre").val();
        var confirmPassword = $("#sifreTekraar").val();

        if (name === "") {
            $("#kullanici").attr("placeholder", "Ad boş bırakılmaz");
        }
        if (email === "") {
            $("#email").attr("placeholder", "E-mail boş bırakılmaz");
        }
        if (password === "") {
            $("#sifre").attr("placeholder", "Şifre boş bırakılmaz");
        }
        if (confirmPassword === "") {
            $("#sifreTekraar").attr("placeholder", "Şifre tekrar boş bırakılmaz");
        }
    });
});
