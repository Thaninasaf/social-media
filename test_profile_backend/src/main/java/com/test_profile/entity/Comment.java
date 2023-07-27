package com.test_profile.entity;

import java.sql.Timestamp;
import java.util.UUID;
//import edu.umd.cs.findbugs.annotations.Nullable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


	
	@Entity
	@Table(name = "Comment")
	
	public class Comment {
		
		@Id
		@Column
		private UUID commentID;
		
		@Column
		private UUID postID;
		@Column
		private String userID;

		@Column
		private String userImage;
		@Column
		private String userName;
		
		@Column
		private String comment;
		@Column
		private Timestamp timestamp;
		

		public Comment() {
				super();
			}
		
		
		public Comment(UUID commentID, UUID postID, String userID, String userImage, String userName, String comment,
				Timestamp timestamp) {
			super();
			this.commentID = commentID;
			this.postID = postID;
			this.userID = userID;
			this.userImage = userImage;
			this.userName = userName;
			this.comment = comment;
			this.timestamp = timestamp;
		}
		
		public String getUserImage() {
			return userImage;
		}
	
		public void setUserImage(String userImage) {
			this.userImage = userImage;
		}
	
		public String getUserName() {
			return userName;
		}
	
		public void setUserName(String userName) {
			this.userName = userName;
		}
	
		public UUID getCommentID() {
			return commentID;
		}
	
		public void setCommentID(UUID commentID) {
			this.commentID = commentID;
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
	
		public String getComment() {
			return comment;
		}
	
		public void setComment(String comment) {
			this.comment = comment;
		}
	
		public Timestamp getTimestamp() {
			return timestamp;
		}
	
		public void setTimestamp(Timestamp timestamp) {
			this.timestamp = timestamp;
		}
	
		
	}
