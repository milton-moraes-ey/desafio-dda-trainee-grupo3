package com.ey.desafio.account;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
	
	private final AccountRepository clientRepo;
	
	// Construtor
	@Autowired
	public AccountService(AccountRepository accRepo) {
		this.clientRepo = accRepo;
	}

	// Valida o login
	public Long validate(Account account) {
		
		Optional<Account> verifyLogin = clientRepo.findByEmail(account.getEmail());
		if(verifyLogin.isPresent()) {
			if(verifyLogin.get().getPassword().equals(account.getPassword())) {
				return verifyLogin.get().getClientId();
			}
		}
		return -1L;
	}

	// Registra um usuário
	public long addAccount(Account account) {
		Optional<Account> verifyMail = clientRepo.findByEmail(account.getEmail());
		if(verifyMail.isEmpty() ) {
			clientRepo.save(account);
			return 1L;
		}
		return -1L;
		
	}
}
