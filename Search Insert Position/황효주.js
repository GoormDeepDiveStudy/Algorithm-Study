var searchInsert = function (nums, target) {
  if (nums.includes(target)) return nums.indexOf(target);
  else if (target > nums[nums.length - 1]) return nums.length;
  else {
    let index = 0;
    for (let i of nums) {
      if (i > target) return index;
      index++;
    }
  }
};
