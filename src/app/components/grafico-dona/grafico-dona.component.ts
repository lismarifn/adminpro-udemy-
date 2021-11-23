import { Component, OnInit, Input } from '@angular/core';
import { ChartLegendItem, ChartLegendLabelItem, ChartType } from 'chart.js';
import { MultiDataSet, Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {
  @Input() chartLabels: Label[] = [];
  @Input() chartData: SingleDataSet = [];
  @Input() chartType: ChartType = 'doughnut' ;
  @Input() leyenda: string = 'no esta mostrando nada' ;


  constructor() { }

  ngOnInit(): void {
  }

 

}
