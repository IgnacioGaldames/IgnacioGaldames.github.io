const DateTime = luxon.DateTime;
const dateDiv = document.getElementById('date-display');

function updateDateTime() {
  const now = DateTime.now().setLocale('es');
  const weekday = now.toFormat('cccc');
  const day = now.toFormat('d');
  const month = now.toFormat('LLLL');
  const year = now.toFormat('yyyy');
  const time = now.toFormat('HH:mm:ss');
  const milliseconds = now.toFormat('SSS');
  const zone = now.toFormat('ZZZZ');
  const formattedDate = `${weekday}, ${day} de ${month} de ${year}, ${time}.${milliseconds} ${zone}`;
  dateDiv.textContent = formattedDate;
}

setInterval(updateDateTime, 1000);
updateDateTime();

// GSAP ScrambleText Animation for h1 and .source-code elements on page load
document.addEventListener('DOMContentLoaded', () => {
  const elementsToScramble = document.querySelectorAll('h1, .source-code');
  const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  elementsToScramble.forEach(el => {
    const originalText = el.textContent;

    if (!originalText || originalText.trim() === '') {
      return;
    }

    gsap.to(el, {
      duration: 1.5,
      scrambleText: {
        text: originalText,
        chars: scrambleChars,
        speed: 0.2,
      },
      ease: "power1.inOut",
    });
  });
});

// GSAP Animation
gsap.registerPlugin(ScrambleTextPlugin);
updateDateTime();


// GSAP ScrambleText Animation for h1 and .source-code elements on page load
document.addEventListener('DOMContentLoaded', () => {
  const elementsToScramble = document.querySelectorAll('h1, .source-code');
  const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  elementsToScramble.forEach(el => {
    const originalText = el.textContent;

    // Skip empty elements or elements with only whitespace
    if (!originalText || originalText.trim() === '') {
      return;
    }

    gsap.to(el, {
      duration: 1.5, // Duration of the scramble effect
      scrambleText: {
        text: originalText, // Text to scramble to
        chars: scrambleChars, // Characters to use for scrambling
        speed: 0.2, // Speed of character cycling (lower is faster cycling, higher is slower)
      },
      ease: "power1.inOut", // Easing for the overall animation
    });
  });
});

// GSAP Animation
gsap.registerPlugin(ScrambleTextPlugin);
updateDateTime();