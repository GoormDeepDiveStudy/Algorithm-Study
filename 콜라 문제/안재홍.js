function solution(a, b, n) {
  var answer = 0;
  let blank = 0;
  
  while(n >= a){
      answer += b * Math.floor(n / a);
      blank = n % a;
      n = b * Math.floor(n / a) + blank; 
  }
  
  return answer;
}