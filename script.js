// === 1. ЧАСЫ В ЗАГОЛОВКЕ ===
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.title = `Мир шахмат — ${time}`;
}
setInterval(updateClock, 1000); // обновляем каждую секунду

// === 2. СМЕНА ЦВЕТА ФОНА ===
function changeBackgroundColor() {
  const colors = ['#f5f5f5', '#ffe4b5', '#d0f0c0', '#add8e6', '#f8c8dc'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// === 3. ВЫВЕСТИ ТЕКУЩУЮ ДАТУ ===
function showDate() {
  const today = new Date().toLocaleDateString('ru-RU');
  alert(`Сегодня: ${today}`);
}
