package com.example.demo.controllers;

import com.example.demo.repositories.SentenceRepository;
import com.example.demo.models.Sentence;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
class SentenceController {

    private final SentenceRepository repository;

    SentenceController(SentenceRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/sentences")
    List<Sentence> all() {
        return repository.findAll();
    }

    @PostMapping("/sentences")
    Sentence newSentence(@RequestBody Sentence newSentence) {
        return repository.save(newSentence);
    }

    @DeleteMapping("/sentences/{id}")
    void deleteSentence(@PathVariable String id) {
        repository.deleteById(id);
    }

}