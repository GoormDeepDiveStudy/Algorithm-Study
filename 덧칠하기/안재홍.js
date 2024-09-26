function solution(n, m, section) {
  var answer = 0;
  if(m === 1) return section.length;
  else {
      let arr = Array(n).fill(1);
      section.map(a => arr[a - 1] = 0);
      
      while(arr.includes(0)) {
          let k = arr.indexOf(0);
          arr = arr.map((a, i) => {
              if(a === 0 && i >= k && i < k + m) return 1;
              else return a;
          })
          answer += 1;
      }
      
      return answer;
  }
}