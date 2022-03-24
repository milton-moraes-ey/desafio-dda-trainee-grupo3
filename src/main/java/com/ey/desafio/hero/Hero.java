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
	private String powers;

	@Column
	private long universe;

	@Column
	private long clientId;

	@Column
	private String recDate;

	@Column
	private int softDelete;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getHeroName() {
		return heroName;
	}

	public void setHeroName(String heroName) {
		this.heroName = heroName;
	}

	public String getPowers() {
		return powers;
	}

	public void setPowers(String powers) {
		this.powers = powers;
	}

	public long getUniverse() {
		return universe;
	}

	public void setUniverse(long universe) {
		this.universe = universe;
	}

	public long getClientId() {
		return clientId;
	}

	public void setClientId(long clientId) {
		this.clientId = clientId;
	}

	public String getRecDate() {
		return recDate;
	}

	public void setRecDate(String recDate) {
		this.recDate = recDate;
	}

	public int getSoftDelete() {
		return softDelete;
	}

	public void setSoftDelete(int softDelete) {
		this.softDelete = softDelete;
	}

	// Construtor vazio
	public Hero() {
	}

	public Hero(long id, String heroName, String powers, long universe, long clientId, String recDate, int softDelete) {
		super();
		this.id = id;
		this.heroName = heroName;
		this.powers = powers;
		this.universe = universe;
		this.clientId = clientId;
		this.recDate = recDate;
		this.softDelete = 0;
	}

}
