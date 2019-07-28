$(document).ready(function() {
  $(document).scroll(function() {
    if (screen.width > 768) {
      let scrollPos = $(document).scrollTop();
      if (scrollPos >= 120) {
        $("#nav").addClass("bg-blue");
      } else if (scrollPos < 120) {
        $("#nav").removeClass("bg-blue");
      }
    }
  });
});
