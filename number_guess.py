def guessing_game():
	import random
	x = random.randint(1,100)
	guess = int(input("Guess the number between 1-100 (enter numbers only) "))
	while guess != x:
		if guess > x:
			print("Too high")
			guess = int(input("Guess again "))
		if guess < x:
			print("Too low")
			guess = int(input("Guess again "))
	if guess == x:
		print("Congrats, you guessed it!")
		return
