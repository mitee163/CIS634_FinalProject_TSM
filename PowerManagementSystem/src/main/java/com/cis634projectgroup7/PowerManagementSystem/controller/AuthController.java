package com.cis634projectgroup7.PowerManagementSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cis634projectgroup7.PowerManagementSystem.model.User;
import com.cis634projectgroup7.PowerManagementSystem.payloads.JwtAuthRequest;
import com.cis634projectgroup7.PowerManagementSystem.payloads.JwtAuthResponse;
import com.cis634projectgroup7.PowerManagementSystem.security.JwtTokenHelper;
import com.cis634projectgroup7.PowerManagementSystem.service.UserService;

@RestController
@RequestMapping("/api/v1/auth/")
//@CrossOrigin("*")
public class AuthController {
	
	@Autowired
	private JwtTokenHelper jwtTokenHelper;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/login")
	public ResponseEntity<JwtAuthResponse> createToken(@RequestBody JwtAuthRequest request) throws Exception{
		
		this.authenticate(request.getUsername(), request.getPassword());
		UserDetails userDetails = this.userDetailsService.loadUserByUsername(request.getUsername());
		String token = this.jwtTokenHelper.generateToken(userDetails);
		JwtAuthResponse response = new JwtAuthResponse();
		response.setToken(token);
		return new ResponseEntity<JwtAuthResponse>(response, HttpStatus.OK);
	}

	private void authenticate(String username, String password) throws Exception {
		
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
		
		try
		{
			this.authenticationManager.authenticate(authenticationToken);
		}
		catch (BadCredentialsException e) {
			System.out.println("Invalid username or password!!");
			throw new Exception("Invalid username or password!!");
		}
		
	}
	
	@PostMapping("/register")
	public ResponseEntity<User> registerUser(@RequestBody User user){
		
		User registeredUser = this.userService.registerNewUser(user);
		return new ResponseEntity<User>(registeredUser, HttpStatus.CREATED);
	}
}
