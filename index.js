let count = 0;

const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const resetButton = document.getElementById("reset");

incrementButton.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count; // Обновляем отображение счетчика
});

resetButton.addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count; // Обновляем отображение счетчика
});

// дополнения

document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const counter = document.querySelector(".counter");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentPage = 0;
  const totalPages = pages.length; // Используем реальное количество страниц

  function updatePage(newIndex) {
    // Проверка и корректировка границ
    if (newIndex < 0) newIndex = totalPages - 1;
    if (newIndex >= totalPages) newIndex = 0;

    // Плавное переключение страниц
    pages[currentPage].classList.remove("active");
    currentPage = newIndex;
    pages[currentPage].classList.add("active");

    // Обновление счетчика
    counter.textContent = `${currentPage + 1}/${totalPages}`;
  }



  // Обработчики событий
  prevBtn.addEventListener("click", () => {
    updatePage(currentPage - 1);
  });

  nextBtn.addEventListener("click", () => {
    updatePage(currentPage + 1);
  });

  // Инициализация
  updatePage(0);
});

// Функция для прокрутки к началу страницы
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Плавная прокрутка
  });
}

// Получаем кнопки
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

// Добавляем обработчики событий
prevButton.addEventListener("click", scrollToTop);
nextButton.addEventListener("click", scrollToTop);



// function stopAudio(playerId) {
//   var audio = document.getElementById(playerId);
//   if (audio) {
//     audio.pause(); // Останавливаем воспроизведение
//     audio.currentTime = 0; // Сбрасываем время воспроизведения (если нужно)
//   } else {
//     console.error("Аудиоплеер с ID " + playerId + " не найден.");
//   }
// }

// stopAudio("audioPlayer1"); // Остановить audioPlayer1
// stopAudio("audioPlayer2"); // Остановить audioPlayer2
// stopAudio("audioPlayer3"); // Остановить audioPlayer2
// stopAudio("audioPlayer4"); // Остановить audioPlayer2


function stopAudio(...playerIds) {
    playerIds.forEach(playerId => {
        var audio = document.getElementById(playerId);
        if (audio) {
            audio.pause(); // Останавливаем воспроизведение
            audio.currentTime = 0; // Сбрасываем время воспроизведения (если нужно)
        } else {
            console.error('Аудиоплеер с ID ' + playerId + ' не найден.');
        }
    });
}

// Пример использования:
stopAudio('audioPlayer1', 'audioPlayer2', 'audioPlayer3', 'audioPlayer4');
