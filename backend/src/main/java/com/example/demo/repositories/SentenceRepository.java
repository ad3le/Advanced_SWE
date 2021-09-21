package com.example.demo.repositories;

import com.example.demo.models.Sentence;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SentenceRepository extends MongoRepository<Sentence, String> {
}