
$('.wdp-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    // stagePadding: 470,
    center: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1.5,
            margin: 0
        },
        500: {
            items: 2,
            margin: 0
        },
        600: {
            items: 2.2
        },
        769: {
            items: 2.5
        },
        992: {
            items: 2.5
        },
        1100: {
            items: 3
        }
    }
});

$('.user-feedback-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    stagePadding: 0,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$('.pricing-slider').owlCarousel({
    loop: true,
    margin: 10,
    stagePadding: 8,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        992: {
            items: 2
        },
        1199: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});

$('.testi-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    stagePadding: 8,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        992: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

// ===============cursor

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});

function validate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }