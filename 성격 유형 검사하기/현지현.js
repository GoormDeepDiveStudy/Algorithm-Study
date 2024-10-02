function solution(survey, choices) {
    let score = new Map();
    let answer = '';
    
    survey.map((question,i)=>{
        const choice = choices[i];
        
        if(choice > 4){
            score.set(question[1], (score.get(question[1]) || 0) + (choice - 4));
        }
        else if(choice < 4) {
            score.set(question[0], (score.get(question[0]) || 0) + (4 - choice));
        }
    })
    
    answer += (score.get('R') || 0) >= (score.get('T') || 0) ? 'R' : 'T';
    answer += (score.get('C') || 0) >= (score.get('F') || 0) ? 'C' : 'F';
    answer += (score.get('J') || 0) >= (score.get('M') || 0) ? 'J' : 'M';
    answer += (score.get('A') || 0) >= (score.get('N') || 0) ? 'A' : 'N';
    
    return answer;
}