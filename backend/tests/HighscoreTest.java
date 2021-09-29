
import com.example.demo.models.Highscore;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class HighscoreTest{

    @Test
    @DisplayName("getScore() returns Score")
    void getScoreReturnsScore(){
        Integer enteredScore=2;
        Highscore highscore=new Highscore("Name",enteredScore);
        Integer returnedScore=highscore.getScore();
        assertEquals(enteredScore,returnedScore);
    }

    @Test
    @DisplayName("getName() returns Name")
    void getNameReturnsName(){
        String enteredName="Name";
        Highscore highscore=new Highscore("Name",2);
        String returnedName=highscore.getName();
        assertEquals(enteredName,returnedName);
    }

    @Test
    @DisplayName("equals() returns false if only name and score are equal,but ID isn't")
    void equalsReturnsFalseIfIdUnequal(){
        Highscore firstHighscore=new Highscore("Name",2);
        Highscore secondHighscore=new Highscore("Name",2);
        assertTrue(!firstHighscore.equals(secondHighscore));
    }

    @Test
    @DisplayName("equals() returns false if Name is unequal")
    void equalsReturnsFalseIfNameUnequal(){
        Highscore firstHighscore=new Highscore("Name",2);
        Highscore secondHighscore=new Highscore("ddd",2);
        assertTrue(!firstHighscore.equals(secondHighscore));
    }

    @Test
    @DisplayName("equals() returns false if Score is unequal")
    void equalsReturnsFalseIfScoreUnequal(){
        Highscore firstHighscore=new Highscore("Name",2);
        Highscore secondHighscore=new Highscore("Name",5);
        assertTrue(!firstHighscore.equals(secondHighscore));
    }

    @Test
    @DisplayName("equals() returns false if Name and Score are unequal")
    void equalsReturnsFalseIfNameAndScoreUnequal(){
        Highscore firstHighscore=new Highscore("Name",2);
        Highscore secondHighscore=new Highscore("ddd",5);
        assertTrue(!firstHighscore.equals(secondHighscore));
    }
}