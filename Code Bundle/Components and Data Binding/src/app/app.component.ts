import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: {
    type: string,
    name: string,
    content: string,
  }[] = [];

  onServerCreated(server: { name: string, content: string }) {
    this.serverElements.push({
      type: 'server',
      name: server.name,
      content: server.content
    });
  }

  onBlueprintCreated(blueprint: { name: string, content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprint.name,
      content: blueprint.content
    });
  }
}
