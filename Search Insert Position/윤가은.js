function searchInsert(nums, target) {
    let left = 0, right = nums.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        nums[mid] < target ? left = mid + 1 : right = mid;
    }
    return left;
}
