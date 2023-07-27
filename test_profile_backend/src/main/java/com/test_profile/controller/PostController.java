package com.test_profile.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test_profile.entity.Post;
import com.test_profile.service.PostService;

@CrossOrigin
@RestController
@RequestMapping("/api/postService")
public class PostController {
	
	@Autowired
	PostService postService;

	@PostMapping("/save")
	public ArrayList<Post> submitPost(@RequestBody Post body){
		ArrayList<Post> result=postService.submitPostToDB(body);
		return result;
	}
	
	@GetMapping("/getPost")
	public ArrayList<Post> retrieveAllPost(){
		ArrayList<Post> result=postService.retrivePostFromDB();
		result.sort((e1, e2) -> e2.getDateTime().compareTo(e1.getDateTime()));
		return result;
	}
	
	@DeleteMapping("/delete/{postId}")
	public ArrayList<Post> deleteParticularPost(@PathVariable("postId") UUID postID){
		ArrayList<Post> result=postService.deletePostFromDB(postID);
		return result;
	}
	
	///////added
	 @PostMapping("/like/{postId}")
	    public ResponseEntity<?> likePost(@PathVariable("postId") UUID postID) {
	        Post post = postService.getPostById(postID);
	        if (post == null) {
	            return ResponseEntity.notFound().build();
	        }
	        int likes = post.getLikes();
	        likes++;
	        post.setLikes(likes);
	        postService.savePost(post);
	        return ResponseEntity.ok().build();
	    }
	////////end
	
	
	
	
}