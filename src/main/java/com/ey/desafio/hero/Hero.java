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
	private long heroId;

	@Column
	private String name;

	@Column
	private String universe;

	@Column
	private String power;

	@Column
	private long userId;

	@Column
	private String recDate;

	@Column
	private int softDelete;

	public long getHeroId() {
		return heroId;
	}

	public void setHeroId(long heroId) {
		this.heroId = heroId;
	}

	public String getName() {
		return name;
	}

	public void setName(String heroName) {
		this.name = heroName;
	}

	public String getPower() {
		return power;
	}

	public void setPower(String power) {
		this.power = power;
	}

	public String getUniverse() {
		return universe;
	}

	public void setUniverse(String universe) {
		this.universe = universe;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
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

	public Hero(long heroId, String name, String power, String universe, long userId, String recDate, int softDelete) {
		super();
		this.heroId = heroId;
		this.name = name;
		this.power = power;
		this.universe = universe;
		this.userId = userId;
		this.recDate = recDate;
		this.softDelete = 0;
	}

}
