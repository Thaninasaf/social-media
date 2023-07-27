package com.javamaster.controller;

import com.javamaster.storage.UserStorage;

import java.util.Set;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@CrossOrigin
public class UsersController {

    private final RestTemplate restTemplate;

    public UsersController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/registration/{userName}")
    public ResponseEntity<Void> register(@PathVariable String userName) {
        System.out.println("handling register user request: " + userName);

        // Make a request to the profile microservice to fetch the username
        String profileMicroserviceUrl = "http://localhost:8080/api/getUsername/{uid}"; // Replace with the actual URL of the profile microservice
        String profileMicroserviceResponse = restTemplate.getForObject(profileMicroserviceUrl, String.class, userName);

        if (profileMicroserviceResponse != null) {
            try {
                UserStorage.getInstance().setUser(profileMicroserviceResponse);
            } catch (Exception e) {
                return ResponseEntity.badRequest().build();
            }
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/fetchAllUsers")
    public Set<String> fetchAll() {
        return UserStorage.getInstance().getUsers();
    }
}
