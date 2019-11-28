def digital_root(number):
    result = 0
    for i in str(number)[::-1]:
        result = result + int(i)
        if len(str(result)) > 1:
            digital_root(result)
        else:
            print result
        

digital_root(42)
