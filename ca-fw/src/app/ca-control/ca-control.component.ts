import { Component, OnInit, ViewChild } from '@angular/core';
import { Pattern } from '../pattern/pattern';
import { PatternGridComponent } from '../pattern/pattern-grid.component';
import { isPresent } from '../core/util';

@Component({
  selector: 'ca-fw-ca-control',
  templateUrl: './ca-control.component.html',
  styleUrls: ['./ca-control.component.scss']
})
export class CaControlComponent implements OnInit {

  @ViewChild(PatternGridComponent) patternGrid: PatternGridComponent;
  pattern: Pattern = Pattern.createEmptyPattern();
  patterns: Pattern[] = [];
  stepInterval: any;
  stepDuration: number;
  generationCounter = 0;
  generationStepIntervals = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 1000, 2000];

  constructor() {
  }

  ngOnInit(): void {
    if (isPresent(this.stepInterval)) {
      this.stop();
    }
    this.stepDuration = 150;
  }

  patternUploaded(uploadedPattern: Pattern): void {
    this.loadPattern(uploadedPattern);
    this.ngOnInit();
  }

  loadPattern(loadedPattern: Pattern): void {
    this.patternGrid.pattern = loadedPattern;
    this.patternGrid.ngOnInit();
  }

  reset(): void {
    this.patternGrid.pattern = Pattern.createEmptyPattern();
    this.patternGrid.ngOnInit();
    this.generationCounter = 0;
    this.ngOnInit();
  }

  nextGeneration(): void {
    this.patternGrid.nextGeneration();
    this.generationCounter++;
  }

  run(): void {
    this.stepInterval = setInterval(() => this.nextGeneration(), this.stepDuration);
  }

  stop(): void {
    clearInterval(this.stepInterval);
  }
}


