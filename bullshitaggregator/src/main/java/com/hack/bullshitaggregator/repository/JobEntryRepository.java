package com.hack.bullshitaggregator.repository;

import com.hack.bullshitaggregator.model.JobEntry;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobEntryRepository extends MongoRepository<JobEntry, String> {

    @Query("{ keywords: { $all: ?0 } }")
//    @Query("{keywords: {$exists:true}, $where:'this.keywords.length > 2'}")
    List<JobEntry> findByKeywordsIn(List<String> keywords);
}