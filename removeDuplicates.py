#without using set
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        for num in nums[:-1]:
            num_index = nums.index(num)
            if nums[num_index + 1] == num:
                nums.remove(num)
