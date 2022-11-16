package com.cis634projectgroup7.PowerManagementSystem.model;

import java.sql.Timestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "bill")
public class Bill {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Bill_Id;
	
	@NotBlank
	private Timestamp Bill_Date;
	
	@NotBlank
	private Timestamp Due_Date;
	
	@NotBlank
	private int Amount;
	
	@NotBlank
	private int Units;
	
	@NotBlank
	private String Status;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name="User_Id",nullable = false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIgnore
	private User user;
	
	public Bill() {
	}
	
	public Timestamp getBill_Date() {
		return Bill_Date;
	}
	public void setBill_Date(Timestamp bill_Date) {
		Bill_Date = bill_Date;
	}
	public Timestamp getDue_Date() {
		return Due_Date;
	}
	public void setDue_Date(Timestamp due_Date) {
		Due_Date = due_Date;
	}
	public int getAmount() {
		return Amount;
	}
	public void setAmount(int amount) {
		Amount = amount;
	}
	public int getUnits() {
		return Units;
	}
	public void setUnits(int units) {
		Units = units;
	}
	public String getStatus() {
		return Status;
	}
	public void setStatus(String status) {
		Status = status;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User userobj) {
		user = userobj;
	}
}
