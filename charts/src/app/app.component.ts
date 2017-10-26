import {Component, OnInit} from '@angular/core';
import {dia, shapes} from 'jointjs';
import * as $ from 'jquery';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    ngOnInit() {

        let graph = new dia.Graph;
        let paper = new dia.Paper({
            el: $('#paper'),
            width: 1000,
            height: 1000,
            model: graph
        });

        let knob = new shapes.chart.Knob({
            position: {x: 200, y: 200},
            size: {width: 120, y: 120},
            min: 0,
            max: 100,
            value: 75,
            fill: 'darkblue'
        });
        graph.addCell(knob);
    }
}
