package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SentenceController {

    //@RequestMapping(value = "/")
    //public String index() {
    //    return "index";
    //}@Controller
    private SentenceRepository repository;
    public SentenceController(SentenceRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/sentences")
    public String getAllSentences(Model model) {
        model.addAttribute("sentences", repository.findAll());
        return "list-sentences";
    }

}