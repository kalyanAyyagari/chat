import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SocketService } from '../services/socket.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,public socketService: SocketService) {}

  canActivate(): boolean {
    const username = this.socketService.username
    const room = this.socketService.room

    if (username && room) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
