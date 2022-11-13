package com.cis634projectgroup7.PowerManagementSystem.service;

import java.util.List;

import com.cis634projectgroup7.PowerManagementSystem.model.User;

public interface UserService {

	public List<User> getAllUsers();
	public User get(Integer id);
	public User saveUser(User user);
	public void updateUser(User user, Integer id);
	public void deleteUser(Integer id);
}