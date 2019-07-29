$(document).ready(function() {
  $(".fa-arrow-circle-up").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#top-page").offset().top
      },
      800
    );
  });

  function toggleArrowUp() {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      document.getElementById("arrow-up").style.display = "block";
    } else {
      document.getElementById("arrow-up").style.display = "none";
    }
  }

  function updateProgressBar() {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  $(document).scroll(function() {
    if (screen.width > 768) {
      let scrollPos = $(document).scrollTop();
      if (scrollPos >= 120) {
        $("#nav").addClass("bg-blue");
      } else if (scrollPos < 120) {
        $("#nav").removeClass("bg-blue");
      }
    }
    toggleArrowUp();
    updateProgressBar();
  });
});
