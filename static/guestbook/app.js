'use strict';

// Django handles submission, validation and pagination; JS enhances the form.
(() => {
  const form = document.querySelector('#guestbook-form');
  const messageField = document.querySelector('#guest-message');
  const counter = document.querySelector('#character-count');
  if (!form || !messageField || !counter) return;

  function updateCount() {
    counter.textContent = Array.from(messageField.value).length + " / " + messageField.maxLength;
  }

  messageField.addEventListener('input', updateCount);
  window.addEventListener('pageshow', () => {
    form.querySelector('[type="submit"]').disabled = false;
    updateCount();
  });
  form.addEventListener('submit', () => {
    form.querySelector('[type="submit"]').disabled = true;
  });
  updateCount();
})();
