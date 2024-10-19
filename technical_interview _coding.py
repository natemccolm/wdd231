import math

input_list=[1,2,3,5,7,11,13,17,23,29]
target=30


def two_sum(nums: list[int], target: int):
    list[int]
    for i, number in enumerate(input_list[:-1]): 
        complementary = target - number
        if complementary in input_list[i+1:]:  # note 2
            print("Solution Found: {} and {}".format(number, complementary))
            break
        else:  # note 3
            print("No solutions exist")

two_sum(input_list, target)