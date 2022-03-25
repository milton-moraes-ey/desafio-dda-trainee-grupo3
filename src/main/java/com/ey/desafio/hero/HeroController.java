package com.ey.desafio.hero;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

//API LAYER

@RestController
@RequestMapping(path = "/hero")
@CrossOrigin("*")
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
	public List<Hero> getHeroByName(String name) {
		return heroServ.getHeroByName(name);
	}
	
	// Encontra heróis criados pelo usuário
	@GetMapping(path = "byId")
	public List<Hero> findAllByUserId(Long userId) {
		return heroServ.findAllByUserId(userId);
	}
	
	// Adiciona herói ao banco
	@PostMapping(path = "postHero", consumes = {"*/*"})
	public Hero addHero(@RequestBody Hero hero) {
		return heroServ.addHero(hero);
	}
	
	// Edita herói no banco
		@PostMapping(path = "editHero", consumes = {"*/*"})
		public void editHero(@RequestBody Hero hero) {
			heroServ.editHero(hero);
		}
	
	// Deleta herói
		@GetMapping(path = "delete")
		public void softDeleteHeroByHeroId(@RequestParam Long heroId) {
			heroServ.softDeleteHeroByHeroId(heroId);
		}
}
