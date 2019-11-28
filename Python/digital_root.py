def digitalRoot(number):
    result = 0
    for i in str(number)[::-1]:
        result = result + int(i)
    print result
        

digitalRoot(33)
