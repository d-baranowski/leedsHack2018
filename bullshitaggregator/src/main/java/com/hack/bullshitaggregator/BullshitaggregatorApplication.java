package com.hack.bullshitaggregator;

import com.hack.bullshitaggregator.repository.JobEntryRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackageClasses = JobEntryRepository.class)
public class BullshitaggregatorApplication {

    public static void main(String[] args) {
        SpringApplication.run(BullshitaggregatorApplication.class, args);
    }
}
