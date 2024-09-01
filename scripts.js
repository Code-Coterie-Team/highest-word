function longestWord(){
    const sentence = document.getElementById("sentence").value;
    console.log(sentence);
    const words = sentence.split(' ');
    console.log(words);
    // loop for ignoring the punctuation
    for (let i = 0; i < words.length; i++){
        if (words[i].includes('!')){
            words[i] = words[i].replaceAll("!", "");
            console.log(words[i]);
        }
        if (words[i].includes("@")){
            words[i] = words[i].replaceAll('@', '');
            console.log(words[i]);
        }
        if (words[i].includes('&')){
            words[i] = words[i].replaceAll('&', '');
            console.log(words[i]);
        }
    }

    let longestWordofSentence = words[0];

    for (let i = 0; i < words.length; i++) {
        let wordLen = words[i].length;
        if (wordLen > longestWordofSentence.length){
            longestWordofSentence = words[i];
        }
    }
    console.log("Longest word is: " + longestWordofSentence);

    let result = document.getElementById("result");
    result.classList.add('result');
    result.textContent = longestWordofSentence;
}