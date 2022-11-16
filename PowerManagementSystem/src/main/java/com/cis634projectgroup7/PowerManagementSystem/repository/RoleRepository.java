package com.cis634projectgroup7.PowerManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cis634projectgroup7.PowerManagementSystem.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

}
