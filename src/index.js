function prevent_default(e) {
   e.preventDefault()
}

$('#toggle-nav').click(toggleNav)

function toggleNav() {
	if ($('#nav-ul').css('max-height').toString() == '238px') {
		$('#nav-ul').css('max-height', '0px')
	} else {
		$('#nav-ul').css('max-height', '238px')
	}
}

$(window).bind("resize",function(){
    if($(this).width() > 719 && $('#nav-ul').css('max-height').toString() == '238px') {
		  $('#nav-ul').css('max-height', '0px')
    }
})

function change_page(page) {
  document.getElementById(page).click()
}

$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash)
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault()
      toggleNav()
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target)
        $target.focus()
        if ($target.is(":focus")) { // Checking if the target was focused
          return false
        } else {
          $target.attr('tabindex','-1') // Adding tabindex for elements not focusable
          $target.focus() // Set focus again
        }
      })
    }
  }
})