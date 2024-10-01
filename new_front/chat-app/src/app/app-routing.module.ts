import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinComponent } from './feature/join/join.component';
import { ChatComponent } from './feature/chat/chat.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: JoinComponent },
  { path: 'chat', component: ChatComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
