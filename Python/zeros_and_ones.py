import numpy as np

def zeros_and_ones(arr):
    a = np.array(arr)
    num = "".join(map(str,a))
    print(int(num))
    print(num)
    
    
zeros_and_ones([0,0,0,1])
