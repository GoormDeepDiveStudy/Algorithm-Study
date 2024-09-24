function solution(k, m, score) {
  let answer = 0;
  let arr = [];
  
  score.sort((a, b) => b - a);
  
  for(let i = 0; i < score.length; i = i + m){
      arr.push(score.slice(i, i + m));
  }
  
  arr = arr.filter(n => n.length === m);
  arr.map(j => answer += Math.min(...j) * m);
  
  return answer;
}