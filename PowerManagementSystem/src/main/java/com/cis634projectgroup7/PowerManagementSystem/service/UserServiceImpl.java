package com.cis634projectgroup7.PowerManagementSystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cis634projectgroup7.PowerManagementSystem.config.AppConstants;
import com.cis634projectgroup7.PowerManagementSystem.model.Role;
import com.cis634projectgroup7.PowerManagementSystem.model.User;
import com.cis634projectgroup7.PowerManagementSystem.repository.RoleRepository;
import com.cis634projectgroup7.PowerManagementSystem.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Lazy
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private RoleRepository roleRepository;

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}
	
	@Override
	public User get(Integer id) {
		return userRepository.findById(id).get();
	}
	
	@Override
	public User saveUser(User user) {
		return userRepository.save(user);
	}
	
	@Override
	public User updateUser(User user, Integer id) {
		User existingUser = userRepository.findById(id).get();
		existingUser.setName(user.getName());
		existingUser.setPassword(user.getPassword());
		existingUser.setUsername(user.getUsername());
		existingUser.setAddress(user.getAddress());
		userRepository.save(existingUser);
		return existingUser;
	}
	
	@Override
	public Boolean deleteUser(Integer id) {
		userRepository.deleteById(id);
		return true;
	}
	
	/*
	 * @Override public User existsUserByEmailAndPassword(String Email,String
	 * Password) { User existingUser =
	 * userRepository.findByEmailAndPassword(Email,Password); return existingUser; }
	 */
	
	@Override
	public Optional<User> findByEmail(String Email) {
		Optional<User> existingUser = userRepository.findByEmail(Email);
		return existingUser;
	}

	@Override
	public User registerNewUser(User user) {
		user.setPassword(this.passwordEncoder.encode(user.getPassword()));
		Role role = this.roleRepository.findById(AppConstants.Normal_User).get();
		user.getRoles().add(role);
		User newUser = this.userRepository.save(user);
		return newUser;
	}
}
