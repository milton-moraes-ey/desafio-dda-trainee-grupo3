package com.ey.desafio.hero;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// DATA LAYER

@Repository
public interface HeroRepository extends JpaRepository<Hero, Long>{


//	@Query("SELECT h FROM Hero h WHERE h.hero_name = ?1")
	Hero findByName(String name);
	
//	@Query("SELECT h FROM Hero h WHERE h.client_id = ?1")
	List<Hero> findAllByUserId(Long userId);
	
//	@Query("SELECT h FROM Hero h WHERE h.soft_delete = ?1")
	List<Hero> findAllBySoftDelete(int zero);
	
	List<Hero> findAllByName(String name);
}
