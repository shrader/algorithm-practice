"""
Recursion practice with fibonacci numbers (up to 1000 but could be adjusted for any #).
Trying the dynamic programing approach with storing values that were already calculated.

"""
mem = [None]*1000


def fib(n,m=mem):
	if n == 1 or n == 2:
		return 1
	if m[n] != None:
		return m[n]
	else:
		m[n] = fib(n-1) + fib(n-2)
		return m[n]
