def running_times():
	times = []
	x = input('Enter 10 km run time: ')
	while x != "":
		times.append(float(x))
		x = input('Enter 10 km run time: ')
	if x == '':
		return print(f'Average of {(sum(times)/len(times))} over {len(times)} runs')

"""
Example Output (with example user inputs):

Enter 10 km run time: 15
Enter 10 km run time: 20
Enter 10 km run time: 10
Enter 10 km run time: 
Average of 15.0 over 3 runs
"""
