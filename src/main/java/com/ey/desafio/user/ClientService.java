package com.ey.desafio.user;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {
	
	private final ClientRepository clientRepo;
	
	// Construtor
	@Autowired
	public ClientService(ClientRepository ClientRepo) {
		this.clientRepo = ClientRepo;
	}

	// Valida o login
	public Long validate(Client info) {
		
		Optional<Client> verifyLogin = clientRepo.findByUsername(info.getUsername());
		if(verifyLogin.isPresent()) {
			if(verifyLogin.get().getPassword().equals(info.getPassword())) {
				return verifyLogin.get().getClientId();
			}
		}
		return -1L;
	}

	// Registra um usuário
	public long addClient(Client client) {
		Optional<Client> verifyMail = clientRepo.findByEmail(client.getEmail());
		if(verifyMail.isEmpty() ) {
			clientRepo.save(client);
			return 1L;
		}
		return -1L;
		
	}
}
