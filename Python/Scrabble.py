# Raymond Koerner -  On my honor as a student, I have neither given nor received any unauthorized aid on this assignment.

#Scrabble.py

letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 4, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10]


ltp=zip(letters,points)
letters_to_points = {key:value for (key,value) in ltp}

letters_to_points[""]=0

player_to_words={"player1":["BLUE","TENNIS","EXIT"],"wordNerd":["EARTH","EYES","MACHINE"],\
"Lexi Con":["ERASER","BELLY","HUSKY"],"Prof Reader":["ZAP","COMA","PERIOD"]}

player_to_points={}

def score_word(word):
    point_total=0
    for c in word:
        c_upper=c.upper()
        if c_upper in letters_to_points:
           points=letters_to_points[c_upper]
           point_total+=points
        else:
            point_total+=0
    return point_total

def play_word(player,word):
    words=player_to_words[player]
    words.append(word)
    player_to_words[player]=words

def update_point_totals():
    for player, words in player_to_words.items():
        total_points=0
        for word in words:
            total_points+=score_word(word)
        player_to_points[player]=total_points

update_point_totals()
print(player_to_points)
print("-------------")
play_word("player1","ANOTHER")
print(player_to_words)
update_point_totals()
print(player_to_points)
print("-------------")
