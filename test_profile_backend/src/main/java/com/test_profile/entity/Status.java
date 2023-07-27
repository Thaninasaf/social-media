package com.test_profile.entity;

import java.sql.Timestamp;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name = "Status")

public class Status {

	@Id
	@Column
	
	private UUID statusID;
	@Column
	private String userID;
	@Column
	private String statusImageURL;
	@Column
	private Timestamp uploadTIme;
	
	public Status() {
		super();
	}

	public Status(UUID statusID, String userID, String statusImageURL, Timestamp uploadTIme) {
		super();
		this.statusID = statusID;
		this.userID = userID;
		this.statusImageURL = statusImageURL;
		this.uploadTIme = uploadTIme;
	}

	public UUID getStatusID() {
		return statusID;
	}

	public void setStatusID(UUID statusID) {
		this.statusID = statusID;
	}

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public String getStatusImageURL() {
		return statusImageURL;
	}

	public void setStatusImageURL(String statusImageURL) {
		this.statusImageURL = statusImageURL;
	}

	public Timestamp getUploadTIme() {
		return uploadTIme;
	}

	public void setUploadTIme(Timestamp uploadTIme) {
		this.uploadTIme = uploadTIme;
	}

	
	
}