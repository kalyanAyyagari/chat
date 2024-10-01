import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent {
  username: string;
  room: string;

  constructor(private router: Router, private socketService: SocketService) {}

  joinRoom() {
    this.socketService.joinRoom({ username: this.username, room: this.room });
    this.router.navigate(['/chat']);
  }
}
