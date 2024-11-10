const fileInput = document.getElementById('file-input');
const fileListContainer = document.getElementById('file-list');

// Добавляем обработчик событий на input
fileInput.addEventListener('change', () => {
  // Очищаем старый список файлов
  fileListContainer.innerHTML = '';

  // Получаем выбранные файлы
  const files = Array.from(fileInput.files);

  // Проверяем, есть ли выбранные файлы
  if (files.length > 0) {
    files.forEach(file => {
      // Создаем элемент для каждого файла
      const fileItem = document.createElement('div');
      fileItem.classList.add('file-item');
      fileItem.textContent = file.name;

      // Добавляем элемент в контейнер
      fileListContainer.appendChild(fileItem);
    });
  } else {
    // Если файлы не выбраны, выводим сообщение
    fileListContainer.innerHTML = '<div class="file-item">Файлы не выбраны</div>';
  }
});


function toggleForms() {
    const registrationContainer = document.getElementById('registration-container');
    const loginContainer = document.getElementById('login-container');
    registrationContainer.style.display = registrationContainer.style.display === 'none' ? 'block' : 'none';
    loginContainer.style.display = loginContainer.style.display === 'none' ? 'block' : 'none';
}


function sendVideo(){
  const sendButton = document.getElementById("send-button");
  const fileList = document.getElementById("file-list");

  fileList.textContent = " ";
}

////////////////////////////////////////////////////////////////////////////

function showProfession(profession) {
  const candidates = document.querySelectorAll('.candidate-card');
  candidates.forEach(candidate => {
      // Проверка соответствия профессии
      const candidateProfession = candidate.getAttribute('data-profession');
      if (profession === 'all' || candidateProfession === profession) {
          candidate.style.display = 'block';
      } else {
          candidate.style.display = 'none';
      }
  });
}

function filterCandidates() {
  const filter = document.getElementById('filterSelect').value;
  const candidates = document.querySelectorAll('.candidate-card');
  candidates.forEach(candidate => {
      const age = parseInt(candidate.getAttribute('data-age'));
      const experience = parseInt(candidate.getAttribute('data-experience'));
      let display = true;

      // Фильтрация по возрасту и опыту
      if (filter === 'experience_high' && experience < 10) {
          display = false;
      } else if (filter === 'age_30_plus' && age < 30) {
          display = false;
      }

      // Отображение или скрытие карточки кандидата
      candidate.style.display = display ? 'block' : 'none';
  });
}




