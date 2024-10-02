function solution(survey, choices) {
    let obj = { "R": 0, "T": 0, "C": 0, "F": 0, "J": 0, "M": 0, "A": 0, "N": 0 };
    let answer = '';
    
    for (let i = 0; i < survey.length; i++) {
        const [first, second] = survey[i]; 
        let score;
        if (choices[i] > 4) {
            score = choices[i] - 4;
            obj[second] += score;
        } else if (choices[i] < 4) {
            score = 4 - choices[i];
            obj[first] += score;
        }
    }

    answer += obj["R"] >= obj["T"] ? "R" : "T";
    answer += obj["C"] >= obj["F"] ? "C" : "F";
    answer += obj["J"] >= obj["M"] ? "J" : "M";
    answer += obj["A"] >= obj["N"] ? "A" : "N";
    
    return answer;
}
