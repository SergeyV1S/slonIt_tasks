Array.prototype.mySlice = function (fromIndex = 0, end = this.length) {
    const newArray = [];

    const startIndex = fromIndex < 0 ? this.length + fromIndex : fromIndex;
    const endIndex = end < 0 ?  this.length + end : end;

    for(let i = 0; i < endIndex; i++){
        if(i < startIndex) continue;

        newArray.push(this[i]);
    }

    return newArray;
};

Array.prototype.myIndexOf = function (element, fromIndex = 0) {
    const startIndex = fromIndex < 0 ? this.length + fromIndex : fromIndex;
  
    for (let i = startIndex; i < this.length; i++) {
        if(typeof this[i] !== typeof element) return 'Типы не совпадают';

        if (this[i] === element) {
            return i;
        }
    }
  
    return -1;
  };

Array.prototype.myIncludes = function (element, fromIndex = 0) {
    const startIndex = fromIndex < 0 ? this.length + fromIndex : fromIndex;
  
    for (let i = startIndex; i < this.length; i++) {
        if(typeof this[i] !== typeof element) return 'Типы не совпадают';

        if (this[i] === element) {
            return true;
        }
    }

    return false;
};

// Тесты для mySlice
console.log(`Тест mySlice 1: ${[0, 1, 2, 3].mySlice(2, 3)}`); // Должен вывести [2]
console.log(`Тест mySlice 2: ${[0, 1, 2, 3].mySlice(1, -1)}`); // Должен вывести [1, 2]
console.log(`Тест mySlice 3: ${[0, 1, 2, 3].mySlice(-2)}`); // Должен вывести [2, 3]
console.log(`Тест mySlice 4: ${[0, 1, 2, 3].mySlice()}`); // Должен вывести старый массив

// Тесты для myIndexOf
console.log(`Тест myIndexOf 1: ${[0, 1, 2, 3].myIndexOf(2)}`); // Должен вывести 2
console.log(`Тест myIndexOf 2: ${[0, 1, 2, 3, 4, 5].myIndexOf(3, -3)}`); // Должен вывести 3
console.log(`Тест myIndexOf 3: ${['hello', 'world', 'i', 'am', 'Segey'].myIndexOf('am')}`); // Должен вывести 3
console.log(`Тест myIndexOf 4: ${['hello', 'world', 'i', 'am', 'Segey'].myIndexOf('world', 2)}`); // Должен вывести -1
console.log(`Тест myIndexOf 5: ${['hello', 'world', 1, 'am', 5].myIndexOf('world', 2)}`); // Должен вывести "Типы не совпадают"

// Тесты для myIncludes
console.log(`Тест myIncludes 1: ${[0, 1, 2, 3].myIncludes(2)}`); // Должен вывести true
console.log(`Тест myIncludes 2: ${[0, 1, 2, 3].myIncludes(10)}`); // Должен вывести false
console.log(`Тест myIncludes 2: ${[0, 1, 2, 3].myIncludes(1, 2)}`); // Должен вывести false
console.log(`Тест myIncludes 3: ${['hello', 'world', 'i', 'am', 'Segey'].myIncludes('Segey', 3)}`); // Должен вывести true
console.log(`Тест myIncludes 4: ${['hello', 'world', 1, 'am', 5].myIncludes('am')}`); // Должен вывести "Типы не совпадают"
console.log(`Тест myIncludes 5: ${[0, 1, 2, 3].myIncludes(1, -2)}`); // Должен вывести false
console.log(`Тест myIncludes 6: ${[0, 1, 2, 3].myIncludes(3, -2)}`); // Должен вывести true