document.addEventListener('DOMContentLoaded', function () {
  const contactsBtn = document.getElementById('contactsBtn');
  const modal = document.getElementById('contactsModal');
  const closeBtn = document.querySelector('.close');

  // Проверка статуса аренды
  function checkRentalStatus() {
    if (rentalConfig.rentedUntil) {
      contactsBtn.textContent = `Арендовано до ${rentalConfig.rentedUntil}`;
      contactsBtn.disabled = true;
    }
  }

  // Управление модальным окном
  contactsBtn.addEventListener('click', function () {
    if (!rentalConfig.rentedUntil) {
      modal.style.display = 'block';
    }
  });

  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  checkRentalStatus();
});
