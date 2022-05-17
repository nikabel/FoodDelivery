import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-completed-pu',
  templateUrl: './completed-pu.component.html',
  styleUrls: ['./completed-pu.component.less']
})
export class CompletedPuComponent implements OnInit {
  @ViewChild('modal') modal!: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  close=():void=>{
    this.modal.nativeElement.setAttribute('style', 'display: none');
  }

}
