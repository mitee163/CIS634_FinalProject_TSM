package com.cis634projectgroup7.PowerManagementSystem.payloads;

import lombok.Data;

@Data
public class JwtAuthResponse {
	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	private String token;
}
