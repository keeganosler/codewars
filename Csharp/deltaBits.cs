using System; 
  
class Count { 
    public static int countSetBits(int n) 
    { 
        int count = 0; 
        while (n != 0) { 
            count += n & 1; 
            n >>= 1; 
        } 
        return count; 
    } 
    public static int FlippedCount(int a, int b) 
    { 
        return countSetBits(a ^ b); 
    } 
    public static void Main() 
    { 
        int a = 10; 
        int b = 20; 
        Console.WriteLine(FlippedCount(a, b)); 
    } 
} 
