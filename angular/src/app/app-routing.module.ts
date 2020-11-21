import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';

const routes: Routes = [
  { path: '',    redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'whiteboard', component: WhiteboardComponent},
  { path: '**', redirectTo: '/home'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
