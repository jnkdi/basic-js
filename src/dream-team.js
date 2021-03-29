// 1. Проверка на тип данных
// 2. Проходка по элементам массива
// 3. Добавление первого элемента строки к массиву ИМЯ
// 4. Отсортировать массив имя и вывести его

module.exports = function createDreamTeam(members) {
  if(!members){
    return false;
  }
  let name = [];
  for(let i = 0; i < members.length; i++){
    if(typeof members[i] === 'string'){
      name.push(members[i].trim().toUpperCase()[0]);
    }
  }
  return name.sort().join('');
};
