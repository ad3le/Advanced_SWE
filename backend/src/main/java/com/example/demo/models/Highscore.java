package com.example.demo.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection = "highscores")
public class Highscore {

    @Id
    String id;
    private String name;
    private Integer score;

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Integer getScore() {
        return score;
    }

    public Highscore(String name, Integer score) {
        this.name = name;
        this.score = score;
    }
}
