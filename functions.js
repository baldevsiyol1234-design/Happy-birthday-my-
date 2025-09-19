// 🔹 Handle resize refresh
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
  var newWidth = $win.width();
  var newHeight = $win.height();
  if (newWidth !== clientWidth && newHeight !== clientHeight) {
    location.reload();
  }
});

// 🔹 Typewriter effect
(function ($) {
  $.fn.typewriter = function () {
    this.each(function () {
      var $ele = $(this),
        str = $ele.html(),
        progress = 0;
      $ele.html('');
      var timer = setInterval(function () {
        var current = str.substr(progress, 1);
        if (current === '<') {
          progress = str.indexOf('>', progress) + 1;
        } else {
          progress++;
        }
        $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
        if (progress >= str.length) {
          clearInterval(timer);
        }
      }, 75);
    });
    return this;
  };
})(jQuery);

// 🔹 Countdown function
function startClock(targetDate) {
  function updateClock() {
    var now = new Date();
    var diff = new Date(targetDate) - now;

    if (diff <= 0) {
      $("#clock").html("🎂 Today is your Birthday! 🎉❤️");
      return;
    }

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((diff / (1000 * 60)) % 60);
    var seconds = Math.floor((diff / 1000) % 60);

    $("#clock").html(
      "Days <span class='digit'>" + days + "</span> " +
      "Hours <span class='digit'>" + hours + "</span> " +
      "Minutes <span class='digit'>" + minutes + "</span> " +
      "Seconds <span class='digit'>" + seconds + "</span>"
    );
  }

  updateClock();
  setInterval(updateClock, 1000);
}
