import { environment } from "../../environment/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class LocalService {
    constructor(private http: HttpClient) { }

    signup(userdata: any) {
        return this.http.post(`${environment.apiUrl}/signup`, userdata).pipe(map(response => {
            return response;
        }))
    }
    login(email: string, password: string) {
        return this.http.post(`${environment.apiUrl}/login`, { email: email, password: password }).pipe(map(response => {
            return response;
        }))

    }
    resendOtp(email: string) {
        return this.http.post(`${environment.apiUrl}/resend-otp`, { email }).pipe(map(response => {
            return response;
        }))
    }
    verifyOtp(email: string, otp: string) {
        return this.http.post(`${environment.apiUrl}/verify-otp`, { email: email, otp: otp }).pipe(map(response => {
            return response;
        }))
    }
    logout(token: string) {
        return this.http.post(`${environment.apiUrl}/logout`, {}, {
            headers: { Authorization: `Bearer ${token}` }
        });
    }

    forgotPassword(email: string) {
        return this.http.post(`${environment.apiUrl}/forgot-password`, { email });
    }

    resetPassword(email: string, otp: string, newPassword: string) {
        return this.http.post(`${environment.apiUrl}/reset-password`, {
            email, otp, newPassword
        });
    }

    getUser(token: string) {
        return this.http.get(`${environment.apiUrl}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        });
    }

}