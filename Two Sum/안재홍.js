var twoSum = function(nums, target) {
  let number = [];
  for(let i = 0; i < nums.length; i++){
      if(nums.includes(target - nums[i], i + 1)){
          number.push(i, nums.indexOf(target - nums[i], i + 1));
          break;
      }
  }
  return number;
};