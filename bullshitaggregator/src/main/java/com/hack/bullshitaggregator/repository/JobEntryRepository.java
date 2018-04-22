package com.hack.bullshitaggregator.repository;

import com.hack.bullshitaggregator.model.JobEntry;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobEntryRepository extends MongoRepository<JobEntry, String> {

    @Query("{ }")
    List<String> find();

    @Query("{ 'url': ?0}")
    List<JobEntry> findKeywordIdsByUrl(String url);

    @Query("{ 'keywordId': ?0 }")
    List<JobEntry> findUrlsByKeywordId(String keywordId);
}