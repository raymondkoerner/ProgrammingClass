import random

# Raymond Koerner -  On my honor as a student, I have neither given nor received any unauthorized aid on this assignment.

#magic8.py
name=input("What is your name?  \n")
question=input("What is your question?  Must be a yes or no question.  \n")
answer=""
answers=["yes, definitely",
         "it is decidedly so",
         "without a doubt",
         "reply hazy, try again",
         "ask again later",
         "better not tell you now",
         "my sources say no",
         "outlook not so good",
         "very doubtful"]

random_number=random.randint(1,9)
#print("Random number is: " + str(random_number))

if(name != ""):
    print(name.title() + " asks: " + question.title())
else:
    print("Question: " + question)

if(question != ""):
    if random_number == 1:
        print(f'Magic 8-Ball\'s answer:  {answers[0].title()}')
    elif random_number == 2:
        print(f'Magic 8-Ball\'s answer:  {answers[1].title()}')
    elif random_number == 3:
        print(f'Magic 8-Ball\'s answer:  {answers[2].title()}')
    elif random_number == 4:
        print(f'Magic 8-Ball\'s answer:  {answers[3].title()}')
    elif random_number == 5:
        print(f'Magic 8-Ball\'s answer:  {answers[4].title()}')
    elif random_number == 6:
        print(f'Magic 8-Ball\'s answer:  {answers[5].title()}')
    elif random_number == 7:
        print(f'Magic 8-Ball\'s answer:  {answers[6].title()}')
    elif random_number == 8:
        print(f'Magic 8-Ball\'s answer:  {answers[7].title()}')
    elif random_number == 9:
        print(f'Magic 8-Ball\'s answer:  {answers[8].title()}')
else:
    print("You need to enter a question.")
