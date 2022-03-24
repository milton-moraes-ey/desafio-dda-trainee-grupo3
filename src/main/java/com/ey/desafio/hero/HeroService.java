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
	public Hero getHeroByName(String heroName){
		return heroRepo.findByHeroName(heroName);
	}
	
	//Retorna todos os heróis
	public List<Hero> getHeroesByClientId(Long clientId) {
		return heroRepo.findAllByClientId(clientId);
	}
	
	// Adiciona herói à base de dados
	public void addHero(Hero hero) {
		heroRepo.save(hero);
	}
	
	// Puxa todos os heróis da tabela
	public List<Hero> findAllBySoftDelete() {
		int l = 0;
		return heroRepo.findAllBySoftDelete(l);
	}

	// Deleta um herói
	public int deleteHeroById(Long id) {
		heroRepo.deleteById(id);
		return 0;
	}

	public void editHero(Hero hero) {

		// Revisar lógica - deleta a entrada antiga do banco e armazena uma nova com o mesmo id
		long id = hero.getHero_id();
		heroRepo.deleteById(id);
		hero.setHero_id(id);
		heroRepo.save(hero);
		
	}
}
