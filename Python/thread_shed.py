# Raymond Koerner -  On my honor as a student, I have neither given nor received any unauthorized aid on this assignment.

#thread_shed.py

def color_count(color):
    count=0
    for thread in thread_sold_split:
        if thread == color:
            count=count+1
    return count

f = open("thread_shed.txt", "r")
daily_sales=f.read()

daily_sales_replaced=daily_sales.replace(';,;','&&')

daily_transactions=daily_sales_replaced.split(',')

daily_transactions_split=[]
for line in daily_transactions:
    daily_transactions_split.append(line.split('&&'))

transactions_clean=[]
for transaction in daily_transactions_split:
    temp=[]
    for x in transaction:
        temp.append(x.strip())
    transactions_clean.append(temp)

customers=[]
sales=[]
thread_sold=[]

for transaction in transactions_clean:
    customers.append(transaction[0])
    sales.append(transaction[1])
    thread_sold.append(transaction[2])

total_sales=0
for sale in sales:
    fsale=float(sale.replace('$',''))
    total_sales=total_sales+fsale
#print(total_sales)

thread_sold_split=[]
for thread in thread_sold:
    if '&' in thread:
         colors=thread.split('&')
         for color in colors:
             thread_sold_split.append(color)
    else:
        thread_sold_split.append(thread)

colors=['red','yellow','green','white','black','blue','purple']
sentence="This is how much was sold today: "

for c in colors:
    amount=color_count(c)
    sentence+="{0} - {1},  ".format(c,amount)

print(sentence)
sentence2="Total sales for today: ${0:.2f}".format(total_sales)
print(sentence2)
