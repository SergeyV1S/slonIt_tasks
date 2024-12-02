const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const binarySearch = (low, high) => Math.floor((low + high) / 2);

const game = () => {
    const hiddenNumber = randomNumber();
    console.log(`Компьютер 1 загадал число: ${hiddenNumber}\n`);

    let low = 1;
    let high = 100;
    let secondComputerAnswer;

    while(true){
        secondComputerAnswer = binarySearch(low, high);

        console.log(`Компьютер 2: Пробую число ${secondComputerAnswer}.`);

        if(secondComputerAnswer === hiddenNumber){
            console.log(`Компьютер 1: Угадал!`);
            break;
        } 
        else if(secondComputerAnswer > hiddenNumber) {
            high = secondComputerAnswer - 1;
            console.log('Компьютер 1: Меньше.\n');
        }
        else {
            low = secondComputerAnswer + 1;
            console.log('Компьютер 1: Больше.\n');
        }
    }
};

game();
