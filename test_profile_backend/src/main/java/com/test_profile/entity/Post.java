package com.test_profile.entity;

import java.sql.Timestamp;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name = "facebookpost")
public class Post {

	@Id
	@Column
	
	
	private UUID postID;
	@Column
	private String userID;
	@Column
	private String userName;
	@Column
	private String imageURL;
	
	@Column
	private String description;
	@Column
	private String postImgURL;
	
	@Column
	private int likes;
	@Column
	private Timestamp dateTime;
	
	
	
	
	public Post() {
		super();
		
	}


	public Post(UUID postID, String userID, String userName, String imageURL, String description, String postImgURL,
			int likes, Timestamp dateTime) {
		super();
		this.postID = postID;
		this.userID = userID;
		this.userName = userName;
		this.imageURL = imageURL;
		this.description = description;
		this.postImgURL = postImgURL;
		this.likes = likes;
		this.dateTime = dateTime;
	}
	
	
	public UUID getPostID() {
		return postID;
	}
	
	
	public void setPostID(UUID postID) {
		this.postID = postID;
	}
	
	
	public String getUserID() {
		return userID;
	}
	
	
	public void setUserID(String userID) {
		this.userID = userID;
	}
	
	
	public String getUserName() {
		return userName;
	}
	
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	
	public String getImageURL() {
		return imageURL;
	}
	
	
	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}
	
	
	public String getDescription() {
		return description;
	}
	
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	
	public String getPostImgURL() {
		return postImgURL;
	}
	
	
	public void setPostImgURL(String postImgURL) {
		this.postImgURL = postImgURL;
	}
	
	
	public int getLikes() {
		return likes;
	}
	
	
	public void setLikes(int likes) {
		this.likes = likes;
	}
	
	
	public Timestamp getDateTime() {
		return dateTime;
	}
	
	
	public void setDateTime(Timestamp dateTime) {
		this.dateTime = dateTime;
	}
	}
	
	
	

