import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  //newServerContent = '';
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @ViewChild('sereverCotent') serverConentInput : ElementRef;
  constructor() { }
  
  onAddServer() {
    //console.log("elemet---",this.serverConentInput);
  this.serverCreated.emit({
    serverName:this.newServerName,
    serverContent:this.serverConentInput.nativeElement.value
  });
  }

  onAddBlueprint() {
  //  this.blueprintCreated.emit({
  //   serverName:this.newServerName,
  //   serverContent:this.serverConentInput.nativeElement.value
  //  });
  }
  ngOnInit() {
  }

}
