// Sidebar open/close
    $("#openSidebar").click(function(){
      $("#sidebar").addClass("active");
      $(".overlay").fadeIn(250);
    });

    $("#closeSidebar, .overlay").click(function(){
      $("#sidebar").removeClass("active");
      $(".overlay").fadeOut(250);
    });

    // Smooth scroll
    $(".navlink").click(function(e){
      e.preventDefault();
      let target = $(this).attr("href");

      $("#sidebar").removeClass("active");
      $(".overlay").fadeOut(250);

      $("html, body").animate({
        scrollTop: $(target).offset().top - 70
      }, 700);
    });

    // Fade in on scroll animation
    function reveal(){
      $(".fade").each(function(){
        let top = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();

        if(scroll + windowHeight > top + 60){
          $(this).addClass("show");
        }
      });
    }

    $(window).on("scroll", reveal);
    $(document).ready(reveal);

    // animation portfolio grid
     const items = document.querySelectorAll(".art");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.15 });

  items.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.12}s`;
    observer.observe(item);
  });
