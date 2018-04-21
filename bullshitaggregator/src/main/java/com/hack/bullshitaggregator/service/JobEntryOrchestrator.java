package com.hack.bullshitaggregator.service;

import com.hack.bullshitaggregator.model.JobEntry;
import com.hack.bullshitaggregator.repository.JobEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class JobEntryOrchestrator {

    @Autowired
    private JobEntryRepository jobEntryRepository;

    public List<JobEntry> saveAndReturnSimilar(final JobEntry jobEntry) {
        this.jobEntryRepository.save(jobEntry);

        return this.jobEntryRepository.findByKeywordsIn(jobEntry.getKeywords());
    }

}
