package com.cis634projectgroup7.PowerManagementSystem.model;

import javax.persistence.*;

@Entity
@Table(name = "role")
public class Role {
	@Id
	private int Role_Id;
	private String Name;
	
	public int getRole_Id() {
		return Role_Id;
	}
	public void setRole_Id(int role_Id) {
		Role_Id = role_Id;
	}
	
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	
	
}
