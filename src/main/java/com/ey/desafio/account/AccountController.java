package com.ey.desafio.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/account")
@CrossOrigin("*")
public class AccountController {

	private final AccountService accServ;
	
	// Construtor
	@Autowired
	public AccountController (AccountService accServ) {
		this.accServ = accServ;
	}
	
	// Valida o login
	@PostMapping(path = "login", consumes = {"*/*"})
	public Long validate(@RequestBody Account info) {
		System.out.println(info);
		return accServ.validate(info);
	}
	
	// Adiciona usiário ao banco
		@PostMapping(path = "register", consumes = {"*/*"})
		public long addAccount(@RequestBody Account acc) {
			return accServ.addAccount(acc);
		}

}