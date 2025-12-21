document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header-container');
  const nav = document.querySelector('.nav-container');
  const dropdown_links = document.querySelector('.nav-links-dropdown');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
      nav.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      nav.classList.remove('scrolled');
    }
  });

  const logoAnimate = document.querySelector('.logo-animate');
  const words = ['Mohammad', 'Abdulmanan'];
  const defaultText = 'M/A';

  let wordIndex = 0;
  let charIndex = 0;
  let typingSpeed = 150;
  let deletingSpeed = 50;
  let pauseBetween = 1000;

  logoAnimate.textContent = defaultText;

  setTimeout(() => {
    deleteText(defaultText, () => typeWord());
  }, 1500);

  function deleteText(currentText, callback) {
    if (currentText.length > 0) {
      logoAnimate.textContent = currentText.substring(0, currentText.length - 1) || '\u00A0';
      setTimeout(() => deleteText(logoAnimate.textContent.replace('\u00A0', ''), callback), deletingSpeed);
    } else {
      callback();
    }
  }

  function typeWord() {
    const word = words[wordIndex];
    if (charIndex < word.length) {
      if (logoAnimate.textContent === '\u00A0') logoAnimate.textContent = '';
      logoAnimate.textContent += word.charAt(charIndex);
      charIndex++;
      setTimeout(typeWord, typingSpeed);
    } else {
      setTimeout(() => deleteWord(), pauseBetween);
    }
  }

  function deleteWord() {
    const word = words[wordIndex];
    if (charIndex > 0) {
      logoAnimate.textContent = word.substring(0, charIndex - 1) || '\u00A0';
      charIndex--;
      setTimeout(deleteWord, deletingSpeed);
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      if (wordIndex === 0) {
        charIndex = 0;
        logoAnimate.textContent = defaultText;
        setTimeout(() => deleteText(defaultText, () => typeWord()), pauseBetween);
      } else {
        charIndex = 0;
        setTimeout(typeWord, typingSpeed);
      }
    }
  }
});
