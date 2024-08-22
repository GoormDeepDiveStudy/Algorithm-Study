function solution(babbling) {
    let answer = 0;
    const joka = ["aya", "ye", "woo", "ma"]
    

    babbling.map((str,index) => {
        let sentence = str          
        joka.map((word) => {
           sentence = sentence.replace(word, " ")
        })
        console.log(index," : ", sentence)
        if(Number(sentence) == 0) answer++
        
    })

    return answer;
}