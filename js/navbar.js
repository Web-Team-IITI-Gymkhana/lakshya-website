$(window).on('scroll', function () {
    if ($(window).scrollTop() < 100) {
        $('nav').removeClass('sticky-nav');
    } else {
        $('nav').addClass('sticky-nav');
    }
});


function navigate(event){
    //get active element
    var active = event.target.closest(".slide-container").getElementsByClassName("active")[0];
    //remove class "active" from active element
    if(active)active.classList.remove("active");
    //get target element from link
    var target = document.getElementById(event.target("a").getAttribute("href").replace("#",""));
    //add class "active" to the target
    target.classList.add("active");
    event.preventDefault();
    //prevent default link behaviour
  }