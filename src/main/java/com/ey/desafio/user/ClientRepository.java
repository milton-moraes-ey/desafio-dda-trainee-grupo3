package com.ey.desafio.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ClientRepository extends JpaRepository<Client, Long>{

	Optional<Client> findByUsername(String username);
	Optional<Client> findByPassword(String password);
	Optional<Client> findByEmail(String email);

}
