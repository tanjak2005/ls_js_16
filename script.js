// //1
// const dataTypes = [
//     true,
//     's',
//     0,
//     null,
//     undefined,
//     {},
//     [],
//     0n,
//     Symbol(),
//     () => {},
//    ]

// const map = new Map([
//        [true, {
//             value: '',
//             type: '',

//        }], 
//         's',
//         0,
//         null,
//         undefined,
//         {},
//         [],
//         0n,
//         Symbol(),
//         () => {},
// ]);

// console.log(map);


// //2
// let countWords = ` Вместо тепла - зелень стекла
// Вместо огня - дым
// Из сетки календаря выхвачен день
// Красное солнце сгорает дотла
// День догорает с ним
// На пылающий город падает тень
// Перемен!
// Требуют наши сердца
// Перемен!
// Требуют наши глаза
// В нашем смехе и в наших слезах и в пульсации вен
// Перемен!
// Мы ждём перемен!
// Электрический свет продолжает наш день
// И коробка от спичек пуста
// Но на кухне синим цветком горит газ
// Сигареты в руках, чай на столе
// Эта схема проста
// И больше нет ничего
// Всё находится в нас
// Перемен!
// Требуют наши сердца
// Перемен!
// Требуют наши глаза
// В нашем смехе и в наших слезах и в пульсации вен
// Перемен!
// Мы ждём перемен!
// Мы не можем похвастаться мудростью глаз
// И умелыми жестами рук
// Нам не нужно всё это, чтобы друг друга понять
// Сигареты в руках, чай на столе
// Так замыкается круг
// И вдруг нам становится страшно что-то менять
// Перемен! - требуют наши сердца
// Перемен! - требуют наши глаза
// В нашем смехе и в наших слезах и в пульсации вен
// Перемен!
// Мы ждём перемен!
// Перемен!
// Требуют наши сердца
// Перемен!
// Требуют наши глаза
// В нашем смехе и в наших слезах и в пульсации вен
// Перемен!
// Мы ждём перемен!`


// function countRepeatedWords(song) {
//     let countWords = song.split(" ");
//     let wordMap = {};
//     console.log(countWords);

//     for (let i = 0; i < countWords.length; i++) {
//         let currentWordCount = wordMap[countWords[i]];
//         let count = currentWordCount ? currentWordCount : 0;
//         wordMap[countWords[i]] = count + 1;
//     }
//     return wordMap;

//     };
// countRepeatedWords(countWords);
// console.log(countRepeatedWords(countWords));




//2
const button = document.querySelector('#button');
const textarea = document.querySelector("#textarea");
const table = document.querySelector("table");

button.addEventListener('click', () => {
    const text = textarea.value
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`()]/g, "")
        .replace(/\n/g, "")
        .toLowerCase();
    let words = text.split(" ");
    words = words.filter((word) => word !== "");
    const unicValues = new Set(words);
    unicValues.forEach((word) => {
        const row = `
        <tr>
            <td>${word}</td>
            <td>${words.filter((w) => w === word).length}</td>
        </tr>
        `;
        table.innerHTML += row;
    });
    console.log(unicValues);
});

// console.log(button, textarea, table);
