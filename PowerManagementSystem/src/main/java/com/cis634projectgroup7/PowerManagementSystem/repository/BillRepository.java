package com.cis634projectgroup7.PowerManagementSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cis634projectgroup7.PowerManagementSystem.model.Bill;

@Repository
public interface BillRepository extends JpaRepository<Bill,Integer> {
	
	@Query(value="SELECT * FROM Bill WHERE User_Id = ?1",nativeQuery=true)
	List<Bill> findByUserId(Integer user_Id);
}
