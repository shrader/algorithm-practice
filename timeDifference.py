def solve(arr):
    y =[]
    z = []
    for x in arr:
        x = x.split(':')
        x = (int(x[0]) * 60) + int(x[1]) #convert time to minutes since 00:00
        y.append(x)
    y.sort() #put them in order so you which alarms come after which
    before = 0
    after = 0
    midnight = 24 * 60
    if len(y) == 1:
        return '23:59'
    for alarm in y:
        before = y.index(alarm) - 1
        after = y.index(alarm) +1
        if y.index(alarm) == len(y) - 1:
            diff_1 = (midnight - y[y.index(alarm)]) + y[0]
            diff_2 = y[y.index(alarm)] - y[before]
        else:
            diff_1 = y[after] - y[y.index(alarm)]
            diff_2 = y[y.index(alarm)] - y[before]
        biggest_gap = max((diff_1 -1), (diff_2 -1))
        z.append(biggest_gap) #put the bigger difference in a list
    biggest = max(z) #find the biggest number in this list
    biggest = divmod(biggest, 60) #put back in hour / minute format
    (hour, minute) = biggest
    hour = str(hour)
    minute = str(minute)
    if len(hour) == 1:
        hour = '0' + hour
    if len(minute) == 1:
        minute = '0' + minute
    return hour + ':' + minute
