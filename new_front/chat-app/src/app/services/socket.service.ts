import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { message } from '../assets/interfaces'



@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;
  username:string = ''
  room:string = ''
  constructor() {
    this.socket = io('http://localhost:3000');
  }

  joinRoom(data: { username: string; room: string }) {
    this.socket.emit('joinRoom', data);
    this.username = data.username
    this.room = data.room
  }

  sendMessage(message: string) {
    this.socket.emit('chatMessage', message);
  }

  getMessage() {
    return new Observable(observer => {
      this.socket.on('message', (message:message) => {
        observer.next(message);
      });
    });
  }

  leaveRoom() {
    this.socket.disconnect();
  }
}
