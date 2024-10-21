function letterCounter(inputText, target = 'a') {
    const characterMap = new Map();
    const inputTextArray = inputText.toLowerCase().split('');

    inputTextArray.forEach((item) => {
        const newValue = characterMap.has(item) ? characterMap.get(item) + 1 : 1;
        characterMap.set(item, newValue);
    })

    if (characterMap.has(target)) {
        return characterMap.get(target);
    } else {
        return 0;
    }
}


inputText = 'Oi! Meu nome é Aridan Pantoja'
const letterCount = letterCounter(inputText);

if (letterCount > 0) {
    console.log(`O caractere 'a' aparece ${letterCount} vezes no texto!`)
} else {
    console.log(`O caractere 'a' NÃO aparece no texto!`)
}