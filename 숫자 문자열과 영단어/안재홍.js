const numbers = {   
    'zero' : 0,
    'one' : 1,
    'two' : 2,
    'three' : 3,
    'four' : 4,
    'five' : 5,
    'six' : 6,
    'seven' : 7,
    'eight' : 8,
    'nine' : 9,
};

function solution(s) {
var answer = 0;

for(let obj in numbers){
    while(true){
        if(s.includes(obj)) s = s.replace(obj, numbers[obj]);
        else break;
    }
}

answer = parseInt(s);

return answer;
}