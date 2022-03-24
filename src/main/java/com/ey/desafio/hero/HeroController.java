package com.ey.desafio.hero;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//API LAYER

@RestController
@RequestMapping(path = "/hero")
public class HeroController {

	private final HeroService heroServ;
	
	// Construtor
	@Autowired
	public HeroController (HeroService heroServ) {
		this.heroServ = heroServ;
	}
	
	// Puxa todos os heróis da tabela
		@GetMapping(path = "all")
		public List<Hero> findAllBySoftDelete() {
			return heroServ.findAllBySoftDelete();
		}
	
	// Encontra herói pelo nome
	@GetMapping(path = "byName")
	public Hero getHeroByName(String heroName) {
		return heroServ.getHeroByName(heroName);
	}
	
	// Encontra heróis criados pelo usuário
	@GetMapping(path = "byId")
	public List<Hero> getHeroesByClientId(Long clientId) {
		return heroServ.getHeroesByClientId(clientId);
	}
	
	// Adiciona herói ao banco
	@PostMapping(path = "postHero", consumes = {"*/*"})
	public void addHero(@RequestBody Hero hero) {
		heroServ.addHero(hero);
	}
	
	// Deleta herói
		@GetMapping(path = "delete")
		public int deleteHeroById(Long Id) {
			return heroServ.deleteHeroById(Id);
		}
}
