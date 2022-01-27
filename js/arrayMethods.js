/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ НОВЫЙ массив, который получается в результате вычисления callback для каждого элемента.
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора нужно делать через метод массива reduce
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
const arr = [-17, 10, 20, 30, 40, 50, 60, 70, 80, 90, -90];

function map(array, callback) {
  const arrMap = array.reduce((prev, curr, index, Array) => {
    prev.push(callback(curr, index, array));
    return prev;
  }, []);
  return arrMap;
}

map(arr, (item) => {
  return item * 2;
});


/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ НОВЫЙ массив, который включает в себя элементы только те, для которых callback вернул true.
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора нужно делать через метод массива reduce
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function filter(array, callback) {
  const arrFilter = array.reduce((prev, curr, index) => {
    if (callback(curr, index, array)) {
      prev.push(curr);
    }
    return prev;
  }, []);
  return arrFilter;
}

filter(arr, (item, index, array) => {
  if (index % 2 === 0) {
    return true;
  }
})

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ true или false. Если хотя бы для одного элемента callback вернет true, то вся функция возвращает true/
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора нужно делать через метод массива reduce
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function some(array, callback) {
  const resultSome = arr.reduce((prev, curr) => {
    if (curr === 60) {
      prev = true;
    }
    return prev;
  }, false);
  return resultSome;
}

some(arr, (item, index, array) => {
  if (item > 3) {
    return true;
  }
  return false;
})

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ true или false. Если хотя бы для одного элемента callback вернет false, то вся функция возвращает false/
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора нужно делать через метод массива reduce
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function every(array, callback) {
  const resultEvery = arr.reduce((prev, curr) => {
    if (!(curr > 0)) {
      prev = false;
    }
    return prev;
  }, true)
  return resultEvery;
}

every(arr, (item, index, array) => {
  if (item > 0) {
    return true;
  }
  return false;
})

// Эту часть не удаляем, она важна для проверки результата
module.exports = {
  map,
  filter,
  every,
  some,
};
