package com.cis634projectgroup7.PowerManagementSystem.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cis634projectgroup7.PowerManagementSystem.model.User;
import com.cis634projectgroup7.PowerManagementSystem.service.UserService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("http://localhost:3000")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}
	
	@GetMapping("/users/{userId}")
	public ResponseEntity<User> getUser(@PathVariable("userId") Integer userId){
		User user = null;
		user = userService.get(userId);
		return ResponseEntity.ok(user);
	}
	
	@PostMapping("/users")
	public User saveUser(@RequestBody User user) {
		return userService.saveUser(user);
	}
	
	@PutMapping("/users/{userId}")
	public ResponseEntity<User> updateUser(@RequestBody User user,@PathVariable("userId") Integer userId) {
		user = userService.updateUser(user, userId);
		return ResponseEntity.ok(user);
	}
	
	@DeleteMapping("/users/{userId}")
	public ResponseEntity<Map<String,Boolean>> deleteUser(@PathVariable("userId") Integer userId){
		Boolean deleted = false;
		deleted = userService.deleteUser(userId);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", deleted);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/loginUser")
	@ResponseBody
	public Boolean existsUserByEmailAndPassword(@RequestParam String email,@RequestParam String password)
	{
		Boolean result = userService.existsUserByEmailAndPassword(email, password);
		return result;
	}
}
