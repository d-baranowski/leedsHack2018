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

    public List<String> findUrlsWithSimmillarKeywords(String ourUrl) {
        List<JobEntry> entriesWithOurUrl = this.jobEntryRepository.findKeywordIdsByUrl(ourUrl);
        Map<String, Integer> urlToCount = new HashMap<>();
        for (JobEntry jobEntry : entriesWithOurUrl) {
            String keyword = jobEntry.getKeyword();
            List<JobEntry> urlsForKeyword =  this.jobEntryRepository.findUrlsByKeyword(keyword);

            for (JobEntry entry : urlsForKeyword) {
                Integer current = urlToCount.getOrDefault(entry.getUrl(), 0);
                urlToCount.put(entry.getUrl(), current+1);
            }
        }

        urlToCount.entrySet().stream().sorted(Comparator.comparing((a, b) -> {

        }).limit(3).collect(Collectors.toList());
    }
}
