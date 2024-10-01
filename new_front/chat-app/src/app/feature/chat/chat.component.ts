import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { message } from '../../assets/interfaces'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  message: string;
  messages: message[] = [];

  constructor(public socketService: SocketService) {}

  ngOnInit() {
    this.socketService.getMessage().subscribe((message: message) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.socketService.sendMessage(this.message);
    this.message = '';
  }

  leaveRoom() {
    this.socketService.leaveRoom();
  }
}

