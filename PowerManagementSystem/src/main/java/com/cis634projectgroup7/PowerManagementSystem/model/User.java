package com.cis634projectgroup7.PowerManagementSystem.model;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


@Entity
@Table(name = "user")
public class User implements UserDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int User_Id;
	private String Name;
	
	@NotBlank
	@Size(max = 120)
	private String Password;
	
	@NotBlank
	@Email
	@Size(max = 50)
	private String Email;
	
	@Size(max = 250)
	private String Address;

	@OneToMany(mappedBy = "user",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	private Set<Bill> bills = new HashSet<>();
	
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinTable(name="user_role",
	joinColumns = @JoinColumn(name="user",referencedColumnName = "user_id"),
	inverseJoinColumns = @JoinColumn(name="role",referencedColumnName = "role_id"))
	private Set<Role> roles = new HashSet<>();
	
	public User() {
	}

	public int getUser_Id() {
		return User_Id;
	}

	public void setUser_Id(int user_Id) {
		User_Id = user_Id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

//	public String getEmail() {
//		return Email;
//	}
//
//	public void setEmail(String email) {
//		Email = email;
//	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}
	
	public Set<Bill> getBills() {
		return bills;
	}

	public void setBills(Set<Bill> billsobj) {
		bills = billsobj;
	}
	
	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<SimpleGrantedAuthority> authorities = this.roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
		return authorities;
	}

	@Override
	public String getUsername() {
		return this.Email;
	}
	
	public void setUsername(String username) {
		Email = username;
	}
	
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}
