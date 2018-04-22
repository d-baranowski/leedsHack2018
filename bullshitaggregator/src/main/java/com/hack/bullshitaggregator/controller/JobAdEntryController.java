package com.hack.bullshitaggregator.controller;

import com.hack.bullshitaggregator.model.JobEntry;
import com.hack.bullshitaggregator.service.JobEntryOrchestrator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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
    List<JobEntry> addJobAdEntry(@RequestBody final JobEntry jobEntry) {
        return this.jobEntryOrchestrator.saveAndReturnSimilar(jobEntry);
    }
}
