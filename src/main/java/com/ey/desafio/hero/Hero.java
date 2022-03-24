package com.ey.desafio.hero;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

// Entidade Herói
@Entity
@Table
public class Hero {

	@Id
	@SequenceGenerator(name = "hero_sequence", sequenceName = "hero_sequence", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "hero_sequence")
	private long id;
	
	@Column
	private String heroName;
	
	@Column
	private long powerId;

	@Column
	private long universeId;

	@Column
	private long clientId;

	@Column
	private String recDate;

	@Column
	private int softDelete;
	
	public int getSoft_delete() {
		return softDelete;
	}

	public void setSoft_delete(int soft_delete) {
		this.softDelete = soft_delete;
	}

	public long getHero_id() {
		return id;
	}

	public void setHero_id(long hero_id) {
		this.id = hero_id;
	}

	public String getHero_name() {
		return heroName;
	}

	public void setHero_name(String hero_name) {
		this.heroName = hero_name;
	}

	public long getPower_id() {
		return powerId;
	}

	public void setPower_id(long power_id) {
		this.powerId = power_id;
	}

	public long getUniverse_id() {
		return universeId;
	}

	public void setUniverse_id(long universe_id) {
		this.universeId = universe_id;
	}

	public long getClientId() {
		return clientId;
	}

	public void setClientId(long clientId) {
		this.clientId = clientId;
	}

	public String getRec_date() {
		return recDate;
	}

	public void setRec_date(String rec_date) {
		this.recDate = rec_date;
	}
	
	// Construtor vazio
	public Hero() {}

	public Hero(String hero_name, long power_id, long universe_id, long clientId, String rec_date) {
		super();
		this.heroName = hero_name;
		this.powerId = power_id;
		this.universeId = universe_id;
		this.clientId = clientId;
		this.recDate = rec_date;
		this.softDelete = 0;
	}

	// Construtor com todos os parâmetros
	public Hero(long hero_id, String hero_name, long power_id, long universe_id, long clientId, String rec_date) {
		super();
		this.id = hero_id;
		this.heroName = hero_name;
		this.powerId = power_id;
		this.universeId = universe_id;
		this.clientId = clientId;
		this.recDate = rec_date;
		this.softDelete = 0;
	}

	// Método toString
	@Override
	public String toString() {
		return "Hero [hero_id=" + id + ", hero_name=" + heroName + ", power_id=" + powerId + ", universe_id="
				+ universeId + ", client_id=" + clientId + ", rec_date=" + recDate + ", soft_delete=" + softDelete
				+ "]";
	}

	
	
	
}
