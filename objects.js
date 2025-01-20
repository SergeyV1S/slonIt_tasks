const myObject = {
    countDigitFields(object) {
        let sum = 0;

        for(field in object){
            if(typeof object[field] === 'number'){
                sum += object[field]
            }
        }

        return sum
    },
    sortFieldNameByDesc: (object) => Object.entries(object)
        .filter(([key, value]) => typeof value === 'number')
        .sort((a, b) => b[1] - a[1])
        .map(([key]) => key)
}

console.log(myObject.countDigitFields({
    name: 'Vasya',
    friends: 5,
    likes: 19,
    projects: 7
})); // Должно вернуть 31

console.log(myObject.sortFieldNameByDesc({
    name: 'Vasya',
    friends: 5,
    likes: 19,
    projects: 7
})); // Должно вернуть [likes, projects, friends]