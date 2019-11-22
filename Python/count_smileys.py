# counts the number of smiley faces in a string

def count_smileys(arr):
    count = 0
    for x in arr:
        is_eyes = False
        is_nose = False
        is_mouth = False
        if(x[0] == ':' or x[0] == ';'):
            is_eyes = True
        if(x[1] == '-' or x[1] == '~'):
            is_nose = True
        if(x[2] == ')' or x[2] == 'D'):
            is_mouth = True
        if(is_eyes == True and is_nose == True and is_mouth == True):
            count = count + 1 
    print(count)
    

count_smileys([':-)', ';-D'])
count_smileys([';-D', ':-(', ':-)', ';~)'])
