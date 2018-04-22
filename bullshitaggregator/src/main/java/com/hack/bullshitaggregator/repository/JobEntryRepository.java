package com.hack.bullshitaggregator.repository;

import com.hack.bullshitaggregator.model.JobEntry;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobEntryRepository extends MongoRepository<JobEntry, String> {

    @Query("{ }")
//    @Query("{keywords: {$exists:true}, $where:'this.keywords.length > 2'}")
    List<String> find();

    @Query("db.collection.find({ }, { url: ?0 })")
    List<JobEntry> findKeywordIdsByUrl(String url);

    @Query("db.collection.find({ }, { keyword: ?0 })")
    List<JobEntry> findUrlsByKeyword(String keyword);
}