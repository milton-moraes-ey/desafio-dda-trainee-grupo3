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

	// Valida o login - retorna -1 se inválido ou o id do usuário autenticado
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
	public String addAccount(Account account) {
		Optional<Account> verifyMail = clientRepo.findByEmail(account.getEmail());
		if(verifyMail.isEmpty() ) {
			clientRepo.save(account);
			// alternativa: retornar bool 0/1 e apresentar no front as strings correspondentes
			return "Cadastro efetuado com sucesso!";
		}
		return "Email já cadastrado!";
	}
}
