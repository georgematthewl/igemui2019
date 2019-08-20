$(document).ready(function() {
  $(".fa-arrow-circle-up").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#top-page").offset().top
      },
      500
    );
  });

  $(".side-nav li a").click(function() {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 64
      },
      500
    );
  });

  $(window)
    .scroll(function() {
      var scrollDistance = $(window).scrollTop();

      $("article").each(function(i) {
        if (($(this).position().top + 500) <= scrollDistance) {
          $(".side-nav li a.active").removeClass("active");
          $(".side-nav li a")
            .eq(i)
            .addClass("active");
        }
      });
    })
    .scroll();

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

  if ($(".accordion").length > 0) {
    $(".accordion").accordion({
      collapsible: true,
      active: false,
      heightStyle: "content"
    });
  }
});
