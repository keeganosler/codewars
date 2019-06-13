public class isPerfectSquare{

     public static void main(String []args){
        int x = -1;
        System.out.println(isSquare(x));
     }
     
     bool isSquare(int i) {
         int sq = sqrt(i);
         return((sq - floor(sq)) == 0);
     }
}
