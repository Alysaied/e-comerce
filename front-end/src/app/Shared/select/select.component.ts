import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent implements OnInit{
  @Input() title:string=""
  @Input() data:any[]=[]
  @Output() selectedValue=new EventEmitter()
  constructor() {
  }
  ngOnInit(){}
  detectChanges(event:any){
    this.selectedValue.emit(event)
  }

}
