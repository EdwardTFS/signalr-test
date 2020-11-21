import { Component, OnDestroy, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  


  connection? : HubConnection;
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

  title = 'signalr angular app-app';
  click($event : any)
  {
    console.log($event);
    if(this.connection){
      this.connection?.send("sendMessage",new Date(),navigator.userAgent)
    }
  }
}
