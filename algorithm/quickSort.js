
function quickSort(nums, left, right) {
  if (left >= right) {
    return;
  }

  const pivot = partition(nums, left, right);
  quickSort(nums, left, pivot - 1);
  quickSort(nums, pivot + 1, right);
}

function partition(nums, start, end) {
  // 普通情况可以直接取第一个数，如果数字排列很整齐特殊的，可以使用随机取边界值
  const randomInedex = start + Math.floor(Math.random() * (end - start + 1));
  swap(randomInedex, start);

  let j = start;
  // j作为小于pivot的边界，从start开始；i则从j+1开始；
  for (let i = j + 1; i <= end; i++) {
    if (nums[i] < nums[start]) {
      j++; // 注意是先j++, [start, j]是小于pivot的区间
      swap(i, j);
    }
  }

  function swap(i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  // j是最后一个小于pivot的值，需要和边界值交换
  swap(start, j);
  return j;
}

