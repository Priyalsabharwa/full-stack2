package com.example.jwtauthexperiment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/auth") // Professional versioning
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    /**
     * Authenticates user and returns a JWT token.
     */
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");

        Map<String, String> response = new HashMap<>();

        // Professional practice: Validate credentials (Hardcoded for experiment)
        if ("admin".equals(username) && "12345".equals(password)) {
            String token = jwtUtil.generateToken(username);
            response.put("status", "success");
            response.put("token", token);
            return ResponseEntity.ok(response);
        }

        response.put("status", "error");
        response.put("message", "Invalid username or password");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
    }

    /**
     * A secured endpoint that requires a valid JWT.
     */
    @GetMapping("/protected")
    public ResponseEntity<Map<String, String>> getProtectedData() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Authentication successful. Access granted to protected resource.");

        return ResponseEntity.ok(response);
    }
}