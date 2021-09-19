package com.example.demo;

import com.example.demo.Language;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

@Document(collection = "sentences")
public class Sentence {

    @Id
    String id;
    private String text;
    private Language language;

    public Sentence(String text, Language language) {
        this.text = text;
        this.language = language;
    }


    public String getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public Language getLanguage(){
        return language;
    }

}