import { instance } from "./api.config.js";

class AuthService {

    login (email: string, password: string) {
        return instance.post("/api/v1/auth/token", new URLSearchParams({username: email, password}))
    }
    
    refresh() {
        return instance.get("/api/refresh");
    }
    
    logout() {
        return instance.post("/api/logout")
    }
}
export const authService = new AuthService();