package com.c0ff33

import com.fasterxml.jackson.databind.ObjectMapper
import org.apache.http.client.methods.HttpPost
import org.apache.http.entity.StringEntity
import org.apache.http.impl.client.HttpClients
import java.nio.file.Files
import java.nio.file.Paths

class Generator

fun main(args: Array<String>) {

    val url = "https://9rph5cqv47.execute-api.eu-west-2.amazonaws.com/dev/replacements"
    val objectMapper = ObjectMapper()
    val httpClient = HttpClients.createDefault()

    val resource = Generator::class.java.classLoader.getResource("input.txt")
    val path = Paths.get(resource.toURI())
    val stream = Files.lines(path)

    println("Adding...")
    stream.map { line ->
        val components = line.split("=")
        val textPattern = components[0].trim()
        val replacementTexts = components[1].split("/").map { s -> s.trim() }

        Replacement(textPattern, replacementTexts)
    }.forEach({ replacement ->

        val httpPost = HttpPost(url)
        val requestEntity = StringEntity(objectMapper.writeValueAsString(replacement))
        httpPost.entity = requestEntity
        httpPost.setHeader("Content-type", "application/json")

        httpClient.execute(httpPost)

    })
    println("Done")


//    val file = File("output.json")
//
//    objectMapper.writeValue(file.outputStream(), replacements)

}

data class Replacement(val textPattern: String, val replacementTexts: List<String>)