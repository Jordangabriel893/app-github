import { Component, OnInit, Output,EventEmitter, Input  } from '@angular/core';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  @Output() emitUser = new EventEmitter();
  @Input() classe;
  @Input() enableInput:boolean = true;;
  @Input() classePai;
  @Input() user = "";
  
  constructor() { }

  ngOnInit() {
  }

  emitValues(){
    this.emitUser.emit(this.user)
  }
}
