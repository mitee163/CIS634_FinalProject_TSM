package com.cis634projectgroup7.PowerManagementSystem.service;

import java.util.List;
import java.util.Optional;

import com.cis634projectgroup7.PowerManagementSystem.model.User;

public interface UserService {

	public List<User> getAllUsers();
	public User get(Integer id);
	public User saveUser(User user);
	public User updateUser(User user, Integer id);
	public Boolean deleteUser(Integer id);
	//public User existsUserByEmailAndPassword(String Email, String Password);
	public Optional<User> findByEmail(String Email);
	public User registerNewUser(User user);
}