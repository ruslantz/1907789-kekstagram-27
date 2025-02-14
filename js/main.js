const SIMILAR_DESCRIPTION_COUNT = 25;
const LIKES_COUNT_MIN = 15;
const LIKES_COUNT_MAX = 200;
const AVATAR_COUNT = 6;
const COMMENTS_COUNT = 10;

// Массив строк для описания фотографии.
const DESCRIPTION = [
  'Каждый день сделайте своим шедевром. Джон Вуден',
  'Лучшая месть – огромный успех. Фрэнк Синатра',
  'Дойдя до конца, люди смеются над страхами, мучившими их вначале. Пауло Коэльо',
  'Новое знание – отличный трамплин для прыжка к успеху. Джеймс Ален',
  'Или вы управляете жизнью или жизнь управляет вами. Джим Рон',
  'Только поступки что-то меняют. Если нет поступков, то все остается прежним. Лес Браун',
  'Чтобы дойти до цели, надо идти. Оноре де Бальзак',
  'Если ты рожден без крыльев, не мешай им расти. Коко Шанель',
  'Если жизнь бросила вас в нокдаун, помните: у вас есть 9 секунд, чтобы встать, отдышаться и двигаться дальше',
  'Всегда делай то, что ты боишься сделать. Ральф Уолдо Эмерсон',
  'Я не знаю, что является ключом к успеху, но ключ к неудаче — это желание всем угодить. Билл Косби',
  'Одной лишь мотивации недостаточно. Если взять идиота и мотивировать его, получится мотивированный идиот. Джим Рон',
  'Если сейчас у тебя нет ничего из того, о чём ты мечтал — пора поставить себе цели и добиваться их. Омар Хайям',
  'Кто может, тот делает, кто не может, тот критикует. Чак Паланик'
];

// Массив случайных имён.
const NAMES = [
  'Яков Русланович',
  'Елизавета Олеговна',
  'Евгения Олеговна',
  'Руслан Фаргатович',
  'Тимур',
  'Татьяна',
  'Фаргат',
  'Ольга',
  'Джексон',
  'Тыква',
];

// Массив сообщений для comments.
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomIntInclusive = (a, b) => {
  if (!Number(a || b) || (a || b) < 0 || a >= b) {
    return NaN;
  }

  const min = Math.ceil(a);
  const max = Math.floor(b);

  return Math.round(Math.random() * (max - min + 1)) + min;
};

const checkStringLength = (string, maxString) => string.length <= maxString;

checkStringLength(1,3);

const getRandomElement = (element) => element[getRandomIntInclusive(0, element.length - 1)];

// Создаёт один объект для массива комментариев
const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomIntInclusive(1, AVATAR_COUNT - 1)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

// Основная функция - создает объект для массива описания фото.
const createPhotoDescription = (id) => {
  // Создает массив комментариев
  const сomments = Array.from({ length: [getRandomIntInclusive(1, COMMENTS_COUNT)] }, (_, commentId) => createComment(commentId + 1));

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomElement(DESCRIPTION),
    likes: getRandomIntInclusive(LIKES_COUNT_MIN, LIKES_COUNT_MAX),
    comments: сomments,
  };
};

const getPhotosDescription = (quantity) => Array.from({length: quantity}, (_, id) => createPhotoDescription(id + 1));

getPhotosDescription(SIMILAR_DESCRIPTION_COUNT);
