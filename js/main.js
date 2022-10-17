const getRandomIntInclusive = (a, b) => {
  if (!Number(a || b) || (a || b) < 0 || a >= b) {
    return NaN;
  }

  const min = Math.ceil(a);
  const max = Math.floor(b);

  return Math.round(Math.random() * (max - min + 1)) + min;

  // вариант с тернарным оператором.
  // return (!Number(a || b) || (a || b) < 0 || a >= b) ? NaN : Math.round(Math.random() * (max - min + 1)) + min;
};

getRandomIntInclusive(7, 5);

const checkStringLength = (string, maxString) => string.length <= maxString;

checkStringLength('строка', 12);

Структура каждого объекта должна быть следующей:

id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

description, строка — описание фотографии. Описание придумайте самостоятельно.

likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:

{
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
}
У каждого комментария есть идентификатор — id — случайное число. Идентификаторы не должны повторяться.

Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.

Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:

Всё отлично!

const createDescriptionPostedPhoto = () => {
  const getRandomIdPhoto = getRandomIntInclusive(1, 25);
  const getRandomUrl = getRandomIntInclusive(1, 25);

  return {
    id: ,
    url: `photos/&{getRandomUrl(1,25)}.jpg`,
    description: ,
    likes: ,
    comments: [createCommets]
  }
}

/*
let stroka = `Всё отлично!
Всё отлично!
В целом всё неплохо. Но не всё.
Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!
stroka.split(/[\n]/);
console.log(stroka.split('\n'));
*/
