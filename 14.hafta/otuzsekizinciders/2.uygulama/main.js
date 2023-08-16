
$(document).ready(function() {
    // Kayıt formunu gizle, giriş formunu göster
    $("#p1").click(function() {
      $("#kayit").hide(4000);
      $("#giris").show(2000);
    });
  
    // Giriş formunu gizle, kayıt formunu göster
    $("#p2").click(function() {
      $("#giris").hide(4000);
      $("#kayit").show(2000);
    });
  });
  
//   $(#p1).click(function()){
//     setTimeout(function(){
//         $("#kayit").hide(2000).fadeOut(2000,function())
//     })
//   }