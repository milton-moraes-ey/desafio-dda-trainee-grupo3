package com.ey.desafio.hero;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//SERVICE LAYER

@Service
public class HeroService {
	
	private final HeroRepository heroRepo;
	
	@Autowired
	public HeroService(HeroRepository heroRepo) {
		this.heroRepo = heroRepo;
	}
	
	// Retorna herói pelo nome
	public List<Hero> getHeroByName(String name){
		List<Hero> local = heroRepo.findAllByName(name);
		for(Hero h:local) {
			if(h.getSoftDelete() == 1) {
				local.remove(h);
			}
		}
		return local;
	}
	
	//Retorna todos os heróis criados pelo usuário
	public List<Hero> findAllByUserId(Long userId) {
		List<Hero> listaLocal = heroRepo.findAllByUserId(userId);
		for(Hero h: listaLocal) {
			if(h.getSoftDelete() == 1) {
				listaLocal.remove(h);
			}
		}
		return listaLocal;
	}
	
	// Adiciona herói à base de dados
	public Hero addHero(Hero hero) {
		return heroRepo.save(hero);
	}
	
	// Puxa todos os heróis da tabela
	public List<Hero> findAllBySoftDelete() {
		int l = 0;
		return heroRepo.findAllBySoftDelete(l);
	}

	// Deleta um herói
	public void softDeleteHeroByHeroId(Long heroId) throws IllegalStateException {
		Hero local;
		try {
			local = heroRepo.findById(heroId).get();
		} catch(IllegalStateException e) {
			throw new IllegalStateException("Herói com o id " + heroId + " não encontrado!");
		}
		local.setSoftDelete(1);
		heroRepo.save(local);
	}

	// Edita dados de um herói
	public void editHero(Hero hero) {
		heroRepo.save(hero);
	}
}
