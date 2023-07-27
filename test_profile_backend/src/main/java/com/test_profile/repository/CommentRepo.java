package com.test_profile.repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.test_profile.entity.Comment;

@Repository
public interface CommentRepo extends JpaRepository<Comment, UUID>{
	
		Comment save(Comment comment);
		ArrayList<Comment> findAllByPostID(UUID postID);
	}

