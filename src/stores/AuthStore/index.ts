import { authService } from "../../api";
import { makeObservable, observable, action} from 'mobx';


export class AuthStore {   
    isAuth = false;
    isAuthInProgress = false;
    userName?: string  = undefined;
    
    constructor() {
      makeObservable(this, {
        isAuth: observable,
        isAuthInProgress: observable,
        getToken: action,
        login: action,
        refreshToken: action,
        logout: action
      });
      this.checkAuth();
    }
    getToken(){
        try{
            return localStorage.getItem('token');
        }
        catch(e) {
            throw e;
        }
    }
  
    async login(email: string, password: string) {
      this.isAuthInProgress = true;
      try {
        const resp = await authService.login(email, password);
        localStorage.setItem("token", resp.data.access_token);
        localStorage.setItem("email", email);
        this.isAuth = true;
        this.userName = email;
  
       } catch (err) {
        console.log("login error");
       } finally {
        this.isAuthInProgress = false;
      } 
    }
    
    checkAuth(){
      const token = localStorage.getItem("token");
      const email = localStorage.getItem("email");
      if(token){
        this.isAuth = true;
        this.userName = email ?? undefined;
      }
    }
  
    async refreshToken() {
      this.isAuthInProgress = true;
      try {
        const resp = await authService.refresh();
        localStorage.setItem("token", resp.data.access_token);
        this.isAuth = true;
  
       } catch (err) {
        console.log("login error");
       } finally {
        this.isAuthInProgress = false;
      } 
    }
  
    async logout() {
      this.isAuthInProgress = true;
      try {
        this.isAuth = false;
        localStorage.removeItem("token");
      } catch (err) {
        console.log("logout error");
      } finally {
        this.isAuthInProgress = false;
      } 
    }
    
  }
  