package com.example.demo.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

@Document(collection = "sentences")
public final class Sentence {

    @Id
    String id;
    private final String text;
    private final Language language;

    public Sentence(String text, Language language) {
        this.text = text;
        this.language = language;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Sentence sentence = (Sentence) o;
        return text.equals(sentence.text) && language == sentence.language;
    }

    @Override
    public int hashCode() {
        return Objects.hash(text, language);
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