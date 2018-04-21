package com.hack.bullshitaggregator.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Component;

import java.util.List;

@Getter
@Setter
@ToString
@Component
public class JobEntry {

//    private String id;
    private List<String> keywords;
    @Id
    private String url;

}
