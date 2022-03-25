package com.ey.desafio.account;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class Account {

	@Id
	@SequenceGenerator(name = "hero_sequence", sequenceName = "hero_sequence", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "hero_sequence")
	private Long userId;
	
	@Column
	private String username;

	@Column
	private String email;

	@Column
	private String password;
	
	
	public Long getClientId() {
		return userId;
	}

	public void setClientId(Long userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Account() {}

	public Account(String username, String email, String password) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
	}

	public Account(Long userId, String username, String email, String password) {
		super();
		this.userId = userId;
		this.username = username;
		this.email = email;
		this.password = password;
	}

	// Construtor para verificação de login
	public Account(String email, String password) {
		super();
		this.username = email;
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "User [clientId=" + userId + ", username=" + username + ", email=" + email + ", password=" + password
				+ "]";
	}

}
