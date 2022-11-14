
import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/service/json.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  constructor(
    public jsonExport: JsonService
  ) { }

  ngOnInit(): void {
  }

  onExportJson(){
    this.jsonExport.export()
  }

}