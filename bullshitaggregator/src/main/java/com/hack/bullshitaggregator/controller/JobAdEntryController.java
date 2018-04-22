package com.hack.bullshitaggregator.controller;

import com.hack.bullshitaggregator.model.JobEntry;
import com.hack.bullshitaggregator.service.JobEntryOrchestrator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
public class JobAdEntryController {

    private JobEntryOrchestrator jobEntryOrchestrator;

    public JobAdEntryController(final JobEntryOrchestrator jobEntryOrchestrator) {
        this.jobEntryOrchestrator = jobEntryOrchestrator;
    }

    @PostMapping
    @ResponseBody
    @RequestMapping(value = "/jobLoad", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE)
    void addJobAdEntry(@RequestBody final JobEntry jobEntry) {
        this.jobEntryOrchestrator.save(jobEntry);
    }

    @GetMapping("/getAll")
    List<String> getAllUrls() {
        return this.jobEntryOrchestrator.find();
    }

    @PostMapping("/getSimilar")
    List<String> getSimilarToOurUrl(@RequestBody final String url) {
        return this.jobEntryOrchestrator.findUrlsWithSimmillarKeywords(url);
    }
}
