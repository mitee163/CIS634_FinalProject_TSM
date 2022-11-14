package com.cis634projectgroup7.PowerManagementSystem.repository;

import com.cis634projectgroup7.PowerManagementSystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

	@Query("SELECT u FROM User u WHERE u.Email = ?1 AND u.Password = ?2")
	User findByEmailAndPassword(String email, String password);

}
