document.addEventListener('DOMContentLoaded', function() {
  const astronaut = document.querySelector('.animate-astronomer');
  let isScrolling = false;

  // Adjust top position based on screen size
  function adjustTopPosition() {
    const windowWidth = window.innerWidth;
    let topPosition = '10%'; // Default value for larger screens

    // Adjust for smaller screens
    if (windowWidth <= 400) {
      topPosition = '23%';
    } else if (windowWidth <= 800) {
      topPosition = '20%';
    } else if (windowWidth <= 1060) {
      topPosition = '10%';
    }

    // Apply the adjusted top position
    astronaut.style.top = topPosition;
  }

  // Initial adjustment on page load
  setTimeout(function() {
    adjustTopPosition();
  }, 0);

  // Re-adjust on window resize
  window.addEventListener('resize', adjustTopPosition);

  // Start moveUpDown animation after reaching initial top position
  astronaut.addEventListener('transitionend', function() {
    astronaut.style.animation = 'moveUpDown 1.5s ease-in-out infinite';
  }, { once: true });

  // Function to handle scroll event
  function handleScroll() {
    if (!isScrolling) {
      // Pause moveUpDown animation
      astronaut.style.animationPlayState = 'paused';

      // Play scrollDownAnimation for a limited time
      astronaut.style.animation = 'scrollDownAnimation 1s ease-in-out';

      // Set a timeout to resume moveUpDown animation after scrollDownAnimation ends
      setTimeout(function() {
        astronaut.style.animation = 'moveUpDown 1.5s ease-in-out infinite';
        astronaut.style.animationPlayState = 'running';
        isScrolling = false;
      }, 1000); // Adjust time as needed

      isScrolling = true;
    }
  }

  // Event listener for scroll
  window.addEventListener('scroll', handleScroll);
});

function flipCard() {
  const card = document.querySelector('.card');
  card.classList.toggle('flip');
}

document.addEventListener('DOMContentLoaded', function() {
  let card = document.getElementById('birthdayCard');

  card.addEventListener('click', function() {
    card.classList.toggle('hover');
  });
});
