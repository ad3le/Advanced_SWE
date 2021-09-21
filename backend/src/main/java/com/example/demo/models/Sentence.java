package com.example.demo.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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