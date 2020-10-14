class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        rev_list = nums.copy()
        rev_list.reverse()
        for num in nums:
            num_index = nums.index(num)
            num2 = target - num
            length = len(nums)
            print(f'num:{num} num2:{num2}')
            if num2 in nums:
                rev_index = rev_list.index(num2)
                num2_index = length - (rev_index +1)
                if num_index != num2_index:
                    return [num_index, num2_index]
