"""
Working with the list data structure
"""
# Import the type hint module
# Any means the List will take in any type of data type
from typing import List, Any

# Initialised using square brackets

my_empty_list: List[Any] = []
print(my_empty_list)

my_list_of_integers: List[int] =  [1,2,3,4]
print(my_list_of_integers)

my_list_of_floats: List[float]  = [1.2, 3.4, 5.6]
print(my_list_of_floats)

my_list_of_strings: List[str]  =["this", "is" ,"a" ,"string"]
print(my_list_of_strings)

my_list_of_booleans: List[bool]  =[True,False,False,True]
print(my_list_of_booleans)

my_mixed_list: List[Any] = [1, "Hello", False, 1.23]
print(my_mixed_list)

# Initialized using the list constructor

my_empty_list: List[Any] = list()
print(my_empty_list)

my_list_of_integers: List[int] = list((1,2,3,4))
print(my_list_of_integers)

my_list_of_floats: List[float] =list ((1.2, 3.4, 5.6))
print(my_list_of_floats)

my_list_of_strings: List[str]=list (("this", "is" ,"a" ,"string"))
print(my_list_of_strings)

my_list_of_booleans: List[bool] =list((True, False,False,True))
print(my_list_of_booleans)

my_mixed_list: List[Any]= list((1, "Hello", False, 1.23))
print(my_mixed_list)

# Accessing items in a list
my_list: List[int] = [1,2,2,5,6,3,4]
first_item: int= my_list[0]
print(first_item)

adele_lyrics: List[str]  =["Hello", "from" ,"the" ,"other", "side"]
last_word: str = adele_lyrics[-1]

print(last_word)

second_last_word: str = adele_lyrics[-2]

print(second_last_word)

fruits: List[str] = ["oranges", "grapefruits","mandarins ","limes","strawberries","raspberries","blueberries","watermelons","rockmelons ","passionfruit","banana",]

# get the citrus fruits oranges(0) to limes(3)
# to include limes in the sublist we add one to the limes index
citrus_fruits: List[str] = fruits[0:4]
print(citrus_fruits)

# get the berries strawberries(4) to blueberries(6)
# to include blueberries in the sublist we add one to the blueberries index
berries_fruits: List[str] = fruits[4:7]
print(berries_fruits)

# get the melons watermelons to rockmelons
# to include rockmelons in the sublist we add one to the rockmelons index

melon_fruits: List[str] = fruits[7:9]
print(melon_fruits)

melon_fruits: List[str] = fruits[7:-2]
print(melon_fruits)


# list of numbers
numbers_list: List[int] = [0,1,2,3,4,5,6,7,8,9,10]
number_of_list_items: int = len(numbers_list)
print(number_of_list_items)


# index of all even numbers

