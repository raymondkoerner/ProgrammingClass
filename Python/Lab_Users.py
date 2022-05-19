# Raymond Koerner -  On my honor as a student, I have neither given nor received any unauthorized aid on this assignment.

#Lab_Users.py

class User:

    def __init__(self, first_name, last_name, email_address, \
    password, login_attempts):
        """initializes first_name and last_name"""
        self.first_name = first_name
        self.last_name=last_name
        self.email_address=email_address
        self.password=password
        self.login_attempts=login_attempts

    def __repr__(self):
        return f"{self.first_name}  {self.last_name}  {self.email_address} \
        {self.password}"

    def greet_user(self):
        """Greets the User"""
        print("Hello " + self.first_name + "  " + self.last_name)

    def reset_attempts(self):
        """resets the number of login attempts to 0"""
        self.login_attempts=0

    def increment_attempts(self):
        """increments the number of login attempts by 1"""
        self.login_attempts += 1

class Admin(User):
    """A subclass of User"""

    def __init__(self,first_name, last_name, email_address, \
    password, login_attempts, privileges):
        """Initializes attributes of the parent class"""
        super().__init__(first_name, last_name, email_address,password, login_attempts)
        self.privileges=privileges

    def show_privileges(self):
        for privilege in self.privileges:
            print (privilege)

user1=User("Raymond","Koerner","rkoerner@gmail.com","my_password",0)
user2=User("Mickey","Mouse","mmouse@gmail.com","mmmmm",0)


print(repr(user1))
print(repr(user2))

user1.increment_attempts()
user2.increment_attempts()
print(user1.login_attempts)
print(user2.login_attempts)

admin1_privileges=["can ban a user", "can add a post", "can delete a post"]

admin1=Admin("Joe","Smith","jsmith@gmail.com","jjjjj",0, admin1_privileges)
print(admin1.show_privileges())

admin2_privileges=["can open an account"]
admin2=Admin("Mary","Smith","msmith@gmail.com","mmmmmm",0,admin2_privileges)
print(admin2.show_privileges())


user1.greet_user()
user2.greet_user()
admin1.greet_user()
admin2.greet_user()
print(repr(user1))
print(repr(user2))
print(repr(admin1))
print(repr(admin2))
print(user1.login_attempts)
print(user2.login_attempts)
print(admin1.login_attempts)
print(admin2.login_attempts)
