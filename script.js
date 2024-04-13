function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.getHours() + ":" + now.getMinutes();
    document.querySelector('#datetime').textContent = currentDateTime;
  }
  setInterval(updateDateTime, 1000);

  const slides = document.querySelectorAll('.slide');
        const nextBtn = document.getElementById('nextBtn');
        let currentSlideIndex = 0;

        nextBtn.addEventListener('click', () => {
            // Hide the current slide
            slides[currentSlideIndex].classList.add('hidden');
            
            // Move to the next slide
            currentSlideIndex++;
            if (currentSlideIndex >= slides.length) {
                currentSlideIndex = 0; // Reset to the first slide if reached the end
            }
            
            // Show the next slide
            slides[currentSlideIndex].classList.remove('hidden');
        });

       
