# Raymond Koerner -  On my honor as a student, I have neither given nor received any unauthorized aid on this assignment.

#Lab_Lists.py

#Task 1
names=["raymond j. koerner","Max","Thomas","Matthew","Bryce","Jay"]
print(names[0])
print(names[1])
print(names[2])
print(names[3])
print(names[4])
print(names[5])

print(f'I have two brothers: {names[1]} and {names[2]}')
print(f'My friends are : {names[3]}, {names[4]} and {names[5]}')
print("My name is " + names[0].title())

#Task 2
guest_list=["Ben Roethlisberger", "Tom Brady", "Terry Bradshaw"]

print(f'Hello {guest_list[0]}! You are invited to my party!')
print(f'Hello {guest_list[1]}! You are invited to my party!')
print(f'Hello {guest_list[2]}! You are invited to my party!')

print(f'Sadly, {guest_list[1]} will not be able to make it to the party')

guest_list[1]="Marcus Allen"

print(f'Hello {guest_list[1]}! You are invited to my party!')

guest_list.insert(1,"Kim Kardashian")
guest_list.insert(3,"Selena Gomez")
guest_list.insert(5,"Beyonce")

print(guest_list)


#Task 3
places=['San Diego', 'New Zealand', 'Singapore', 'Australia', 'Greece']
print(places)

print(sorted(places))
print(places)
print(sorted(places, reverse=True))
places.reverse()
print(places)
places.reverse()
print(places)

places.sort()
print(places)
places.sort(reverse=True)
print(places)
