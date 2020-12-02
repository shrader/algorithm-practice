def split_bill():
	total = int(input('Input bill total:\n'))
	ppl = int(input('How many people are splitting the bill?\n'))
	tip = int(input('How much do you want to tip? Ex. 15% 20% 25%\n'))
	tip = (tip / 100) * total 
	amt = (total + tip) / ppl
	return round(amt, 2)
