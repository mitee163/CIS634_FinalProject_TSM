package com.cis634projectgroup7.PowerManagementSystem.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cis634projectgroup7.PowerManagementSystem.service.UserService;
import com.cis634projectgroup7.PowerManagementSystem.model.User;
import com.cis634projectgroup7.PowerManagementSystem.exceptions.ResourceNotFoundException;

@Service
public class CustomUserDetailService implements UserDetailsService {
	
	@Autowired
	private UserService userService;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = this.userService.findByEmail(username).orElseThrow(()-> new ResourceNotFoundException("user ","email : "+username,0));
		return user;
	}

}
