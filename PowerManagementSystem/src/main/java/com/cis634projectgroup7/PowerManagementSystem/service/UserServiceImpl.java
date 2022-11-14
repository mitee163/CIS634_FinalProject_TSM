package com.cis634projectgroup7.PowerManagementSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cis634projectgroup7.PowerManagementSystem.model.User;
import com.cis634projectgroup7.PowerManagementSystem.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

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
		existingUser.setEmail(user.getEmail());
		existingUser.setAddress(user.getAddress());
		userRepository.save(existingUser);
		return existingUser;
	}
	
	@Override
	public Boolean deleteUser(Integer id) {
		userRepository.deleteById(id);
		return true;
	}
	
	@Override
	public Boolean existsUserByEmailAndPassword(String Email,String Password) {
		User existingUser = userRepository.findByEmailAndPassword(Email,Password);
		if (existingUser == null) {
			return false;
		}
		return true;
	}
	
}
