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
	public List<Hero> getHeroByName(String heroName){
		List<Hero> local = heroRepo.findAllByHeroName(heroName);
		for(Hero h:local) {
			if(h.getSoftDelete() == 1) {
				local.remove(h);
			}
		}
		return local;
	}
	
	//Retorna todos os heróis criados pelo usuário
	public List<Hero> getHeroesByClientId(Long clientId) {
		List<Hero> listaLocal = heroRepo.findAllByClientId(clientId);
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
	public void softDeleteHeroById(Long id) {
		Hero local = heroRepo.findById(id).get();
		heroRepo.deleteById(id);
		local.setSoftDelete(1);
		heroRepo.save(local);
	}

	// Edita dados de um herói
	public void editHero(Hero hero) {

		long id = hero.getId();
		heroRepo.deleteById(id);
		hero.setId(id);
		heroRepo.save(hero);
		
	}
}
