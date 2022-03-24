package com.ey.desafio.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class Client {

	@Id
	@SequenceGenerator(name = "hero_sequence", sequenceName = "hero_sequence", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "hero_sequence")
	private Long clientId;
	
	@Column
	private String username;

	@Column
	private String email;

	@Column
	private String password;
	
	
	public Long getClientId() {
		return clientId;
	}

	public void setClientId(Long clientId) {
		this.clientId = clientId;
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

	public Client() {}

	public Client(String username, String email, String password) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
	}

	public Client(Long clientId, String username, String email, String password) {
		super();
		this.clientId = clientId;
		this.username = username;
		this.email = email;
		this.password = password;
	}

	// Construtor para verificação de login
	public Client(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "User [clientId=" + clientId + ", username=" + username + ", email=" + email + ", password=" + password
				+ "]";
	}

}
