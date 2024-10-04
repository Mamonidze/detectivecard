// Функция для сохранения введённой информации в localStorage
function saveData() {
    const fio = document.getElementById('fio').value;
    localStorage.setItem('fio', fio); // Сохраняем значение в localStorage
}

// Функция для загрузки информации из localStorage при открытии страницы
function loadData() {
    const savedFio = localStorage.getItem('fio'); // Получаем сохранённое значение
    if (savedFio) {
        document.getElementById('fio').value = savedFio; // Восстанавливаем значение в поле ввода
    }
}

// Сохраняем данные при каждом изменении в поле ввода
document.getElementById('fio').addEventListener('input', saveData);

// Загружаем данные при открытии страницы
window.addEventListener('load', loadData);




// Функция для сохранения состояний всех чекбоксов
function saveCheckboxesState() {
    const checkboxes = document.querySelectorAll('.badge-checkbox'); // Получаем все чекбоксы с классом 'badge-checkbox'
    const checkboxesState = [];

    checkboxes.forEach((checkbox, index) => {
        checkboxesState[index] = checkbox.checked; // Сохраняем состояние каждого чекбокса (true или false)
    });

    localStorage.setItem('checkboxesState', JSON.stringify(checkboxesState)); // Сохраняем массив состояний в localStorage
}

// Функция для загрузки состояний всех чекбоксов при открытии страницы
function loadCheckboxesState() {
    const checkboxesState = JSON.parse(localStorage.getItem('checkboxesState')); // Получаем массив состояний из localStorage

    if (checkboxesState) {
        const checkboxes = document.querySelectorAll('.badge-checkbox'); // Получаем все чекбоксы
        checkboxes.forEach((checkbox, index) => {
            checkbox.checked = checkboxesState[index]; // Восстанавливаем состояние каждого чекбокса
        });
    }
}

// Сохраняем состояния чекбоксов при изменении
const checkboxes = document.querySelectorAll('.badge-checkbox');
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', saveCheckboxesState); // Следим за изменениями каждого чекбокса
});

// Загружаем состояния чекбоксов при загрузке страницы
window.addEventListener('load', loadCheckboxesState);
