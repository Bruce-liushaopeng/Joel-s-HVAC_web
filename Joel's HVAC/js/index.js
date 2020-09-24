(function() {
  var charParts, i, j, len, part, partElem, resize;

  charParts = ["d-1", "d-2", "e-1", "e-2", "s-1", "i-1", "i-2", "g-1", "g-2", "n-1", "n-2"];

  partElem = $("path");

  for (j = 0, len = charParts.length; j < len; j++) {
    part = charParts[j];
    $("svg").append(partElem.clone().attr("class", part));
  }

  i = setInterval(function() {
    return $("div").toggleClass("text");
  }, 7000);

  setTimeout(function() {
    return $("div").toggleClass("text");
  }, 100);

  $("div").click(function() {
    clearInterval(i);
    return $("div").toggleClass("text");
  });

  resize = function() {
    return $("body").css({
      "margin-top": ~~((window.innerHeight - 400) / 2) + "px"
    });
  };

  $(window).resize(resize);

  resize();

}).call(this);