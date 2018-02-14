import { Component, OnInit, Input,ViewChild, SimpleChanges, ElementRef, ContentChild } from '@angular/core';
import { OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
 
 
@Input('svrElement') element :{type:string,name:string,content:string};
@Input() name:string;
@ViewChild('heading') ServerHeading:ElementRef;
@ContentChild('paraGraph') paraContent : ElementRef;
  constructor() {
    console.log("constructor called!!");
   }

   ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnchangesCalled-----",changes)
  }
  ngOnInit() {
    console.log("ngOninit called!!");
    console.log("Heading text:"+ this.ServerHeading.nativeElement.textContent);
    console.log("Para content: "+ this.paraContent.nativeElement.textContent);
  }

  ngDoCheck(): void {
   console.log("doChck called!!!");
  }
 
  ngAfterContentInit(): void {
   console.log("ngAfterContentInit called!!!") ;
   console.log("Para content: "+ this.paraContent.nativeElement.textContent);
   
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called!!!")
  }
 
  ngAfterViewInit(): void {
  console.log("ngAterViewinit called!!!");
  console.log("Heading text:"+ this.ServerHeading.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
 console.log("ngafterViewCheked called!!")
  }
 
  ngOnDestroy(): void {
 console.log("Ondestroy called!!!");
  }
}
