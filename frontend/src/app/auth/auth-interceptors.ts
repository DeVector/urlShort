import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private service: AuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler){
        const token = this.service.getAuthorizationToken();
        let request: HttpRequest<any> = req;

        if(token) {
            request = req.clone({
                headers: req.headers.set('Authorization', token)
            });
        }

        return next.handle(request);
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent){
            console.error('Ocorreu um erro: ', error.error.message);
        } else {
            console.error(
                `Código de erro ${error.status}` +
                `Erro: ${JSON.stringify(error.error)}`
            );
        }
    }
}