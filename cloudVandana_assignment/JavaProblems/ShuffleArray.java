import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ShuffleArray {
    public static void main(String[] args) {
        List<Integer> myList = new ArrayList<>();
        
        // Add values to the list
        myList.add(1);
        myList.add(2);
        myList.add(3);
        myList.add(4);
        myList.add(5);
        myList.add(6);
        myList.add(7);

        // Shuffle the list
        Collections.shuffle(myList);

        // Print the shuffled list
        for (Integer value : myList) {
            System.out.print(value + " ");
        }
    }
}
