---
layout: page
title: "about"
date: 2015-04-12 10:25
comments: true
sharing: true
footer: true
---

<div id="blog-about">
  <h2>Bob Lu</h2>
  <p>Ruby on Rails Developer</p>
  <p>往Full Stack發展中 :D (但主力還是會放後端，前端發展好快好複雜QQ)</p>
  <p>maydaybob2000 at gmail.com</p>
  <div>Bitcoin Address: <span id="qrcode_serial">1BobLu5mh5H6sbhGYcwfKt2griDkV6Vhmw</span>　(無聊可donate一下XD <span id="amount"></span>)</div>
  
  <br><br>
  <a class="qrcode_me" id="qrcode_image" href="bitcoin://1BobLu5mh5H6sbhGYcwfKt2griDkV6Vhmw"></a>
</div>
<script src="/javascripts/qrcode.min.js"></script>
<script>
jQuery(function($){
  new QRCode("qrcode_image" , {
    text: 'bitcoin://1BobLu5mh5H6sbhGYcwfKt2griDkV6Vhmw',
    width: 178,
    height: 178,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.L
  });

  $.getJSON("https://blockchain.info/q/addressbalance/1BobLu5mh5H6sbhGYcwfKt2griDkV6Vhmw", function(data) {
      $('#amount').html((data/100000000).toFixed(8));
  });

});
</script>