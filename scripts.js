function longestWord(){
    let sentence = document.getElementById("sentence").value;
    console.log(sentence);

    const newArr = [];
    const words = sentence.split(' ').forEach(element => {
        newArr.push(element.replace(/\W/g, ''));
    });

    console.log(newArr);

    let longestWordofSentence = newArr[0];

    for (let i = 0; i < newArr.length; i++) {
        let wordLen = newArr[i].length;
        if (wordLen > longestWordofSentence.length){
            longestWordofSentence = newArr[i];
        }
    }
    console.log("Longest word is: " + longestWordofSentence);

    let result = document.getElementById("result");
    result.classList.add('result');
    result.textContent = longestWordofSentence;
}