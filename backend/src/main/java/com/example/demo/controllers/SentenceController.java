package com.example.demo.controllers;

import com.example.demo.repositories.SentenceRepository;
import com.example.demo.models.Sentence;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
class SentenceController {

    private final SentenceRepository repository;

    SentenceController(SentenceRepository repository) {
        this.repository = repository;
    }

    @CrossOrigin(origins = "*", maxAge = 3600)
    @GetMapping("/sentences")
    List<Sentence> all() {
        return repository.findAll();
    }

    @CrossOrigin(origins = "*", maxAge = 3600)
    @PostMapping("/sentences")
    Sentence newSentence(@RequestBody Sentence newSentence) {
        return repository.save(newSentence);
    }

    @CrossOrigin(origins = "*", maxAge = 3600)
    @DeleteMapping("/sentences/{id}")
    void deleteSentence(@PathVariable String id) {
        repository.deleteById(id);
    }

}