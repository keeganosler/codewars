def digitalRoot(number):
    result = 0
    for i in str(number)[::-1]:
        result = result + int(i)
        if len(str(result)) > 1:
            digitalRoot(result)
        else:
            print result
        

digitalRoot(42)
