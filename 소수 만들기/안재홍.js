function solution(nums) {
  let list = [];
  for(let i = 0; i < nums.length - 2; i++){
      for(let j = i + 1; j < nums.length - 1; j++){
          for(let k = j + 1; k < nums.length; k++){
              let n = nums[i] + nums[j] + nums[k];
              
              for(let l = 2; l < n; l++){
                  if(n % l === 0) {
                      break;
                  }else if(l === n - 1){
                      list.push(n);
                  }
              }
          }
      }
  }
  
  return list.length;
}