# determines the number of people on a hypothetical bus

def people_on_bus(arr):
    total = 0
    for x in arr:
        total = total + x[0] - x[1]
    print(total)
    
    
people_on_bus([[3,0],[4,2],[7,3]])
