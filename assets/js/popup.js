document.addEventListener('DOMContentLoaded', function () {
  const groomBtn = document.querySelector('.btn.groom');
  const brideBtn = document.querySelector('.btn.bride');
  const closeButtons = document.querySelectorAll('.btn.close');
  const popMasks = document.querySelectorAll('.pop_mask');

  function showPopup(idx) {
    const popup = document.querySelector(`.account_pop[data-idx="${idx}"]`);
    if (popup) {
      popup.style.display = 'flex';
    }
  }

  function hidePopups() {
    const popups = document.querySelectorAll('.account_pop');
    popups.forEach(popup => {
      popup.style.display = 'none';
    });
  }

  groomBtn.addEventListener('click', function (e) {
    e.preventDefault();
    showPopup(1);
  });

  brideBtn.addEventListener('click', function (e) {
    e.preventDefault();
    showPopup(2);
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      hidePopups();
    });
  });

  popMasks.forEach(mask => {
    mask.addEventListener('click', function () {
      hidePopups();
    });
  });
});