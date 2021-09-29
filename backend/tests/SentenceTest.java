import com.example.demo.models.Language;
import com.example.demo.models.Sentence;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static com.example.demo.models.Language.DE;
import static com.example.demo.models.Language.EN;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class SentenceTest{ 
    @Test 
    @DisplayName("getLanguage()returnslanguage") 
    void getLanguageReturnsLanguage(){ 
        Language enteredLanguage=DE;
        Sentence sentence=new Sentence("text",enteredLanguage);
        Language returnedLanguage=sentence.getLanguage();
        assertEquals(enteredLanguage,returnedLanguage);
    }

    @Test
    @DisplayName("getText()returnstext")
    void getTextReturnsText(){
        String enteredText="text";
        Sentence sentence=new Sentence("text",DE);
        String returnedText=sentence.getText();
        assertEquals(enteredText,returnedText);
    }

    @Test
    @DisplayName("equals()returnstrueifequal")
    void equalsReturnsTrueIfEqual(){
        Sentence firstSentence=new Sentence("text",DE);
        Sentence secondSentence=new Sentence("text",DE);
        assertTrue(firstSentence.equals(secondSentence));
        }

    @Test
    @DisplayName("equals()returnsfalseiftextisunequal")
    void equalsReturnsFalseIfTextUnequal(){
        Sentence firstSentence=new Sentence("UNEQUALTEXT",DE);
        Sentence secondSentence=new Sentence("text",DE);
        assertTrue(!firstSentence.equals(secondSentence));
        }

    @Test
    @DisplayName("equals()returnsfalseiflanguageisunequal")
    void equalsReturnsFalseIfLanguageUnequal(){
        Sentence firstSentence=new Sentence("text",EN);
        Sentence secondSentence=new Sentence("text",DE);
        assertTrue(!firstSentence.equals(secondSentence));
        }

    @Test
    @DisplayName("equals()returnsfalseiftextandlanguageareunequal")
    void equalsReturnsFalseIfTextAndLanguageUnequal(){
        Sentence firstSentence=new Sentence("UNEQUALTEXT",EN);
        Sentence secondSentence=new Sentence("text",DE);
        assertTrue(!firstSentence.equals(secondSentence));
        }
}