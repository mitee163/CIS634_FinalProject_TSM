package com.cis634projectgroup7.PowerManagementSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cis634projectgroup7.PowerManagementSystem.model.User;
import com.cis634projectgroup7.PowerManagementSystem.service.UserService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("http://localhost:3000")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/getAll")
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}
	
	@GetMapping("/getUser/{userId}")
	public User getUser(@PathVariable Integer userId){
		return userService.get(userId);
	}
	
	@PostMapping("/users")
	public String add(@RequestBody User user) {
		userService.saveUser(user);
		return "New user is added";
	}
	
	@PutMapping("/update/{userId}")
	public String update(@RequestBody User user,@PathVariable("userId") Integer userId) {
		userService.updateUser(user, userId);
		return "User has been updated";
	}
	
	@DeleteMapping("/delete/{userId}")
	public String delete(@PathVariable("userId") Integer userId) {
		userService.deleteUser(userId);
		return "User has been deleted";
	}
}
