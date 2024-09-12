function solution(k, score) {
  var answer = [];
  let result = [];
  
  score.map((n)=>{
      if(result.length < k){
          result.push(n);
          answer.push(Math.min(...result));
      }else{
          if(n < Math.min(...result)) 
              answer.push(Math.min(...result));
          else{
              result.sort((a,b)=>a - b);
              result.shift();
              result.push(n);
              answer.push(Math.min(...result));
          }
      }
  })
  return answer;
}