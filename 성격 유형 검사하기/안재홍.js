let map = {
  R : 0,
  T : 0,
  C : 0,
  F : 0,
  J : 0,
  M : 0,
  A : 0,
  N : 0
}

function solution(survey, choices) {
var answer = '';

for(let i = 0; i < survey.length; i++) {
  let s = survey[i].split('');
  switch(choices[i]){
      case 1: map[s[0]] += 3; break;
      case 2: map[s[0]] += 2; break;
      case 3: map[s[0]] += 1; break;
      case 4: break;
      case 5: map[s[1]] += 1; break;
      case 6: map[s[1]] += 2; break;
      case 7: map[s[1]] += 3; break;
  }
}
let c1 = map['R'] >= map['T'] ? 'R' : 'T';
let c2 = map['C'] >= map['F'] ? 'C' : 'F';
let c3 = map['J'] >= map['M'] ? 'J' : 'M';
let c4 = map['A'] >= map['N'] ? 'A' : 'N';


return c1 + c2 + c3 + c4;
}