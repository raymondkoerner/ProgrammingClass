import random

# Raymond Koerner -  On my honor as a student, I have neither given nor received any unauthorized aid on this assignment.

name=input("what is your name? \n")
question=input("what is your question? \n")
answer=""
answers=["yes definently", 
         "It is decidedly so",
         "very doubtful" ,
         "reply hazy" ,  
         "try again" ,
         "ask again later" , 
         "better not tell you now" ,
         "my sources say no" ,
        "out look not so good"]

random_number=random.randint(1,9)

if(name != ""):
    print(name + " asks : " + question)
else:
    print("Question: " + question)

if(question != ""):
    if (random_number == 1):
        print("Magic 8-Ball Answer: " + answers[0])
    elif (random_number == 2):
        print("Magic 8-Ball Answer: " + answers[1])
    elif random_number == 3:
        print("Magic 8-Ball Answer: " + answers[2])
    elif random_number == 4:
        print("Magic 8-Ball Answer: " + answers[3])
    elif random_number == 5:
        print("Magic 8-Ball Answer: " + answers[4])
    elif random_number == 6:
        print("Magic 8-Ball Answer: " + answers[5])
    elif random_number == 7:
        print("Magic 8-Ball Answer: " + answers[6])
    elif random_number == 8:
        print("Magic 8-Ball Answer: " + answers[7])
    elif random_number == 9:
        print("Magic 8-Ball Answer: " + answers[8])
else:
    print("You need to ask a question.")
     
     
        