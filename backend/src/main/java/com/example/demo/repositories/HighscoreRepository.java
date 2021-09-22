package com.example.demo.repositories;

import com.example.demo.models.Highscore;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface HighscoreRepository extends MongoRepository<Highscore, String> {
}