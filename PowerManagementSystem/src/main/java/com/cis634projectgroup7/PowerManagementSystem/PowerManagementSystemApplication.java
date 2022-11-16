package com.cis634projectgroup7.PowerManagementSystem;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.cis634projectgroup7.PowerManagementSystem.config.AppConstants;
import com.cis634projectgroup7.PowerManagementSystem.model.Role;
import com.cis634projectgroup7.PowerManagementSystem.repository.RoleRepository;

@SpringBootApplication
public class PowerManagementSystemApplication implements CommandLineRunner {
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private RoleRepository roleRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(PowerManagementSystemApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println(this.passwordEncoder.encode("xyz"));
		try
		{
			Role roleAdmin = new Role();
			roleAdmin.setRole_Id(AppConstants.Admin_User);
			roleAdmin.setName("ROLE_ADMIN");
			
			Role roleUser = new Role();
			roleUser.setRole_Id(AppConstants.Normal_User);
			roleUser.setName("ROLE_USER");
			
			List<Role> roles = List.of(roleAdmin,roleUser);
			
			List<Role> result = this.roleRepository.saveAll(roles);
			
			result.forEach(r -> {
				System.out.println(r.getName());
			});
		}
		catch (Exception e) {
			e.printStackTrace();
		}
	}

}
