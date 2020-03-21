// функция проверки
function pallindrom(word) {
    // переворачиваем слово
    var rts = word.split('').reverse().join('');

    // пишем условие
    if (word == rts) {
        // правда если равны
        return true;
    } else {
        // ложь если нет
        return false;
    };
};

// выводим в консоль пример
console.log(pallindrom('abba'));