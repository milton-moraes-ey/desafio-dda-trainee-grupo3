package com.ey.desafio.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/client")
public class ClientController {

	private final ClientService clientServ;
	
	// Construtor
	@Autowired
	public ClientController (ClientService clientServ) {
		this.clientServ = clientServ;
	}
	
	// Valida o login
	@PostMapping(path = "login", consumes = {"*/*"})
	public Long validate(@RequestBody Client info) {
		System.out.println(info);
		return clientServ.validate(info);
	}
	
	// Adiciona usiário ao banco
		@PostMapping(path = "register", consumes = {"*/*"})
		public long addClient(@RequestBody Client client) {
			return clientServ.addClient(client);
		}

}