package com.cis634projectgroup7.PowerManagementSystem.service;

import java.util.List;

import com.cis634projectgroup7.PowerManagementSystem.model.User;

public interface UserService {

	public List<User> getAllUsers();
	public User get(Integer id);
	public User saveUser(User user);
	public User updateUser(User user, Integer id);
	public Boolean deleteUser(Integer id);
	public Boolean existsUserByEmailAndPassword(String Email, String Password);
}