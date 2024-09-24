function solution(nums) {
    //서로 다른 수 합하기
    var answer = 0;
      for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (prime(sum)) answer++;
      }
    }
  }
  return answer;
}
function prime(num) {
  for(let i = 2; num > i; i++) {
  if(num % i === 0) {
    return false;
   }
  }

 return num>1;
}
