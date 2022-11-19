import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {

  constructor() {
    this.loadScript();
   }

  loadScript(): void {
    let body = <HTMLDivElement> document.body;
      window.watsonAssistantChatOptions = {
      integrationID: "491873b3-90fe-47a0-867b-484cc805a0b4", // The ID of this integration.
        region: "au-syd", // The region your integration is hosted in.
          serviceInstanceID: "65396cc7-c978-42a3-8def-8644b440581d", // The ID of your service instance.
            onLoad: function (instance: { render: () => void; }) { instance.render(); }
    };
    setTimeout(function () {
      const t = document.createElement('script');
      t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
      body.appendChild(t);
    });
  }

  ngOnInit(): void {
  }

}
