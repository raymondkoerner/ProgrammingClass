# Raymond Koerner -  On my honor as a student, I have neither given nor received any unauthorized aid on this assignment.

#glossary.py

glossary = {
    'comment':'A comment in Python starts with #',
    'variable':'Variables are containers for storing data values.',
    'numbers':'There are 3 numeric types in Python:  int, float, complex',
    'strings':'Strings in python are surrounded by either single quotation marks, or double quotation marks.',
    'boolean':'Booleans represent one of two values: True or False.',
    'operators':'Operators are used to perform operations on variables and values.',
    'lists':'Lists are used to store multiple items in a single variable.',
    'tuples':'Tuples are used to store multiple items in a single variable.',
    'sets':'Sets are used to store multiple items in a single variable.',
    'dictionaries':'Dictionaries are used to store data values in key:value pairs.',
    'loops':'Python has two primitive loop commands: while and for',
    'function':'A function is a block of code which only runs when it is called.'
}

key = input("Enter a Python term: ")

print(glossary.get(key, f'{key} is not in the glossary.'))
