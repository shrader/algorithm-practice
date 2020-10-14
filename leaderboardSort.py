def leaderboard_sort(leaderboard, changes):
    change_arr = []
    for change in changes:
        x = change.split()
        old_index = leaderboard.index(x[0])
        new_index = old_index - int(x[1])
        leaderboard.pop(old_index)
        leaderboard.insert(new_index, x[0])
    return leaderboard
