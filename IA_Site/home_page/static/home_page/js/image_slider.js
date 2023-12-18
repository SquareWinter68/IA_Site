    let currentIndex = 0;
    const slides = document.querySelector('.slides');
    const total_slides = document.querySelectorAll('.slide').length;
    const text_overlays = document.querySelectorAll('.text-overlay');
    const radio_buttons = document.querySelectorAll('input[name="slider"]');
    let timer;
  
    function next_slide() {
      currentIndex = (currentIndex + 1) % total_slides;
      update_slide();
      update_text_overlay();
      update_radio_buttons();
    }
  
    function update_slide() {
      const translateValue = -currentIndex * 100 + '%';
      slides.style.transform = 'translateX(' + translateValue + ')';
    }
  
    function update_text_overlay() {
      text_overlays.forEach((overlay, index) => {
        overlay.style.transform = index === currentIndex ? 'translateY(0)' : 'translateY(100%)';
      });
    }
  
    function update_radio_buttons() {
      radio_buttons[currentIndex].checked = true;
    }
  
    function start_timer() {
      timer = setInterval(next_slide, 3000);
    }
  
    function reset_timer() {
      clearInterval(timer);
      start_timer();
    }
  
    // Automatic slide change every 3 seconds
    start_timer();
  
    // Manual slide change when clicking on radio buttons
    radio_buttons.forEach((radio, index) => {
      radio.addEventListener('click', () => {
        currentIndex = index;
        update_slide();
        update_text_overlay();
        reset_timer(); // Reset the timer when a radio button is clicked
      });
    });