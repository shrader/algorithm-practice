def solve(arr):
    x = set(arr)
    count_arr = []
    return_list = []
    for num in x:
        y = arr.count(num)
        z = (y, num)
        count_arr.append(z)
    tuple_list = sorted(count_arr, reverse=True)
    print(tuple_list)
    same_list = []
    for each in tuple_list:
        if each in same_list:
            continue
        index = tuple_list.index(each)
        if tuple_list[index][0] == tuple_list[index + 1][0]:
            same_list = sorted(filter(lambda a : a[0] == tuple_list[index][0], tuple_list ))
            last_index = index + len(same_list)
            for val in same_list:
                new_index = same_list.index(val) + index
                tuple_list[new_index] = val
        print(same_list)
        print(tuple_list)
    for tup in tuple_list:
        for i in range(0, tup[0]):
            return_list.append(tup[1])
    return return_list
