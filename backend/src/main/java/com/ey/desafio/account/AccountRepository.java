package com.ey.desafio.account;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AccountRepository extends JpaRepository<Account, Long>{

	Optional<Account> findByUsername(String username);
	Optional<Account> findByPassword(String password);
	Optional<Account> findByEmail(String email);

}
