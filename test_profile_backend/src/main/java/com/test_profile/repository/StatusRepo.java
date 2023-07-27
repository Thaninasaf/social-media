package com.test_profile.repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.test_profile.entity.Status;

@Repository
public interface StatusRepo extends JpaRepository<Status, UUID> {

	Status save(Status status);
	ArrayList<Status> findAll();
}