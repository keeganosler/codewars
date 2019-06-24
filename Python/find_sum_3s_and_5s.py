def find_sum_3s_and_5s(n):
    i = 0
    tot = 0
    while(i <= n):
        i += 1
        if(i%3 == 0 or i%5 == 0):
            tot = tot + 1
    print(tot)
    

find_sum_3s_and_5s(5)
