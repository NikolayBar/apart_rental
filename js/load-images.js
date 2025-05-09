document.addEventListener('DOMContentLoaded', function () {
  const galleryContainer = document.getElementById('gallery-container');
  const maxImages = 20;

  // Создаём контейнер для ленты изображений
  const ribbon = document.createElement('div');
  ribbon.className = 'image-ribbon';
  galleryContainer.appendChild(ribbon);

  // Создаём кнопки навигации
  const prevBtn = document.createElement('button');
  prevBtn.className = 'nav-btn prev-btn';
  prevBtn.innerHTML = '&lt;';
  galleryContainer.appendChild(prevBtn);

  const nextBtn = document.createElement('button');
  nextBtn.className = 'nav-btn next-btn';
  nextBtn.innerHTML = '&gt;';
  galleryContainer.appendChild(nextBtn);

  // Функция для загрузки изображений
  function loadImages() {
    for (let i = 1; i <= maxImages; i++) {
      const imgNumber = i.toString().padStart(2, '0');
      const img = new Image();
      img.src = `images/app_img_${imgNumber}.jpg`;
      img.onload = function () {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'image-item';
        imgContainer.innerHTML = `<img src="${this.src}" alt="Фото квартиры ${i}" loading="lazy">`;
        ribbon.appendChild(imgContainer);
      };
    }
  }

  // Навигация
  prevBtn.addEventListener('click', () => {
    ribbon.scrollBy({ left: -300, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    ribbon.scrollBy({ left: 300, behavior: 'smooth' });
  });

  // Загружаем изображения
  loadImages();
});
