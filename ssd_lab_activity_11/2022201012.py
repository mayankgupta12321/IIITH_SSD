# i) Read the CSV File Provided & drop the last 6 columns . (3)
# ii) Drop all the rows with negative %change of more than 3% using filter & lambda function (5)
# iii) Calculate average of Open, high, low for all the remaining columns using map & lambda function. (4)
# iv) Given character A-Z, design a feature such that all the stocks starting with any specific alphabet should be displayed.
# For example if the input is ‘A’ then it should display AdaniPorts, AsianPaint & AxisBank & all its stocks. (5)
# v) Write the data in stock_output.txt. (3)

import csv

data = []

# i) Read the CSV File Provided & drop the last 6 columns .
filepath = "lab_11_data.csv"
with open(filepath, newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    flag = 0
    for record in spamreader:
        record = record[0: 7]
        if flag == 0:
            flag = 1
        else:
            data.append([record[0], float(record[1].replace(',', '')), float(record[2].replace(',', '')), float(record[3].replace(',', '')),
                         float(record[4].replace(',', '')), float(record[5].replace(',', '')), float(record[6].replace(',', ''))])

# print(data)
# print(len(data))

# # ii) Drop all the rows with negative %change of more than 3% using filter & lambda function
data = list(filter(lambda x: x[6] >= -3.0, data))


# iii) Calculate average of Open, high, low for all the remaining columns using map & lambda function.

noOfRows = len(data)
avg_open = sum(map(lambda x: x[1], data))/noOfRows
# print(avg_open)

avg_high = sum(map(lambda x: x[2], data)) / noOfRows
# print(avg_high)

avg_low = sum(map(lambda x: x[3], data)) / noOfRows
# print(avg_low)

# iv) Given character A-Z, design a feature such that all the stocks starting with any specific alphabet should be displayed.
# For example if the input is ‘A’ then it should display AdaniPorts, AsianPaint & AxisBank & all its stocks.
input_string = input("Enter any character from A-Z (to search the stock) : ")
new_data = list(filter(lambda x: x[0][0] == input_string, data))
# print(new_data)

f1 = open('avg_output.txt', "w")
f1.write(str(avg_open) + "\n" + str(avg_high) + "\n" + str(avg_low))

f2 = open('stock_output.txt', "w")
for row in new_data:
    f2.write(str(row[0]) + " " + str(row[1]) + " " + str(row[2]) + " " +
             str(row[3]) + " " + str(row[4]) + " " + str(row[5]) + " " + str(row[6]) + "\n")
