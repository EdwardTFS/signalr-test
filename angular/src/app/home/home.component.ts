import { Component, OnDestroy, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  connection? : HubConnection;
  constructor() { }

  ngOnInit(): void {
    this.connection = new HubConnectionBuilder()
    .withUrl("/testhub")
    .build();

    this.connection.on("receiveMessage", (data,data2) => {
      console.log(data,data2);
  });
    this.connection.start()
  }

  ngOnDestroy(): void {
    this.connection && this.connection.stop();
  }
  
  
  click($event : any)
  {
    console.log($event);
    if(this.connection){
      this.connection?.send("sendMessage",new Date(),navigator.userAgent)
    }
  }
}
