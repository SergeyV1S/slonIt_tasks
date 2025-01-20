// 1 задание
const capitalizeFirstLetter = (string) => string[0].toUpperCase() + string.slice(1, string.length)

console.log(capitalizeFirstLetter('я должна быть с заглавной буквы.')); // Результат: "Я должна быть с заглавной буквы."

// 2 задание
const truncateString = (input, limit) => {
    if (input.length <= limit) return input
  
    const trimmed = input.slice(0, limit)
    const lastSpaceIndex = Math.max(
      trimmed.lastIndexOf(' '),
      trimmed.lastIndexOf(','),
      trimmed.lastIndexOf('.'),
      trimmed.lastIndexOf('!'),
      trimmed.lastIndexOf('?'),
      trimmed.lastIndexOf(':'),
      trimmed.lastIndexOf(';')
    )
  
    const index = lastSpaceIndex > -1 ? lastSpaceIndex : limit
  
    return input.slice(0, index).trim() + '...'
}

console.log(truncateString("Это пример длинного текста, который нужно укоротить.", 40)); // Результат: "Это пример длинного текста, который..."
console.log(truncateString("Короткая строка.", 40)); // Результат: "Короткая строка."

// 3 задание
const isSubstring = (string1, string2) => string1.includes(string2) || string2.includes(string1);

console.log(isSubstring("рукастый", "рука")); // Результат: true
console.log(isSubstring("рот", "крот")); // Результат: true
console.log(isSubstring("лук", "картофель")); // Результат: false