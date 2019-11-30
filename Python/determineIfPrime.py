def determineIfPrime(number):
    boolean = False
    for n in range(9):
        if(number % n == 0):
            boolean = true
            break
    print(boolean)
    
    
determineIfPrime(10)
