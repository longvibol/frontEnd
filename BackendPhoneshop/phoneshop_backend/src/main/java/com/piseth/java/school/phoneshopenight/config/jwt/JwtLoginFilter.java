package com.piseth.java.school.phoneshopenight.config.jwt;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class JwtLoginFilter extends UsernamePasswordAuthenticationFilter {
	// use for authenticate : provide username and password
	
	
	private final AuthenticationManager authenticationManager;

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {

		// use object mapper to convert from input Serilifesation to java object 

		ObjectMapper mapper = new ObjectMapper();

		try {
			LoginRequest loginRequest = mapper.readValue(request.getInputStream(), LoginRequest.class);

			Authentication authentication = new UsernamePasswordAuthenticationToken(loginRequest.getUsername(),
					loginRequest.getPassword());

			// to verifiy it have inside our databse or not
			Authentication authenticate = authenticationManager.authenticate(authentication);
			return authenticate;

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new RuntimeException(e);
		}

	}
	
	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		
		String secretKey ="abcddfdsf1243abcddfdsf1243abcddfdsf1243";
		
		Date expierDate = new Date();
		//expierDate.setSeconds(1);
		
		String token = Jwts.builder()
				.setSubject(authResult.getName())
				.setIssuedAt(new Date())
				.claim("authorities", authResult.getAuthorities())
				.setIssuedAt(new Date())			
				//.setExpiration(java.sql.Date.valueOf(LocalDate.now().plus(null) 	 	
				.setExpiration(java.sql.Date.valueOf(LocalDate.now().plusDays(7)))
				//.setExpiration(expierDate)
				.setIssuer("phoneshop.com")
				.signWith(Keys.hmacShaKeyFor(secretKey.getBytes()))				
				.compact();
		
		response.setHeader("Authorization", "Bearer "+token);

	}
	

}
