package com.hack.bullshitaggregator.service;

import com.hack.bullshitaggregator.model.JobEntry;
import com.hack.bullshitaggregator.repository.JobEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.stream.Collectors;

@Component
public class JobEntryOrchestrator {

    @Autowired
    private JobEntryRepository jobEntryRepository;

    public void save(final JobEntry jobEntry) {
        this.jobEntryRepository.save(jobEntry);
    }

    public List<String> find() {
        return this.jobEntryRepository.find();
    }

    public List findUrlsWithSimmilarKeywords(String ourUrl) {
        List<JobEntry> entriesWithOurUrl = this.jobEntryRepository.findKeywordIdsByUrl(ourUrl);
        Map<String, Integer> urlToCount = new HashMap<>();
        for (JobEntry jobEntry : entriesWithOurUrl) {
            String keyword = jobEntry.getKeywordId();
            List<JobEntry> urlsForKeyword =  this.jobEntryRepository.findUrlsByKeywordId(keyword);

            for (JobEntry entry : urlsForKeyword) {
                Integer current = urlToCount.getOrDefault(entry.getUrl(), 0);
                urlToCount.put(entry.getUrl(), current+1);
            }
        }

        return urlToCount.entrySet().stream().sorted((a, b) -> b.getValue().compareTo(a.getValue())).limit(3).collect(Collectors.toList());
    }
}
