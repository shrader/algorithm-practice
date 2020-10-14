def disemvowel(string):
    vowels = ['a','e','i','o','u','A','E','I','O','U']
    string2 = []
    for letter in string:
        if letter not in vowels:
            string2.append(letter)
    string2 = "".join(string2)
    return string2
