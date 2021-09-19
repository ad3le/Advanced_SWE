package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SentenceRepository extends MongoRepository<Sentence, String> {
    public Sentence findByText(String text);
    public List<Sentence> findByLanguage(Language Language);
}