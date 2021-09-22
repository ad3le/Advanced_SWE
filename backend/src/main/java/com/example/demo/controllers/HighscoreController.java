package com.example.demo.controllers;

import com.example.demo.repositories.HighscoreRepository;
import com.example.demo.models.Highscore;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
class HighscoreController {

    private final HighscoreRepository repository;

    HighscoreController(HighscoreRepository repository) {
        this.repository = repository;
    }

    @CrossOrigin(origins = "*", maxAge = 3600)
    @GetMapping("/highscores")
    List<Highscore> all() {
        return repository.findAll();
    }

    @CrossOrigin(origins = "*", maxAge = 3600)
    @PostMapping("/highscores")
    Highscore newHighscore(@RequestBody Highscore newHighscore) {
        return repository.save(newHighscore);
    }

    @CrossOrigin(origins = "*", maxAge = 3600)
    @DeleteMapping("/highscores/{id}")
    void deleteHighscore(@PathVariable String id) {
        repository.deleteById(id);
    }

}