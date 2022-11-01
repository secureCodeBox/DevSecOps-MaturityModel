import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { sample } from 'rxjs';
import { ymlService } from 'src/app/service/yaml-parser/yaml-parser.service';

import { TaskDescriptionComponent } from './task-description.component';

describe('TaskDescriptionComponent', () => {
  let component: TaskDescriptionComponent;
  let fixture: ComponentFixture<TaskDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ymlService, HttpClient, HttpHandler],
      imports: [RouterTestingModule],
      declarations: [TaskDescriptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check if header is being genenrated', () => {
    const testDimension = 'Sample Dimension';
    const testSubDimension = 'Sample subDimension';
    component.currentTask.dimension = testDimension;
    component.currentTask.subDimension = testSubDimension;
    fixture.detectChanges();
    const HTMLElement: HTMLElement = fixture.nativeElement;
    const heading = HTMLElement.querySelector('h1')!;
    expect(heading.textContent).toContain(testDimension);
    expect(heading.textContent).toContain(testSubDimension);
  });

  it('check if description is being genenrated', () => {
    const testDescription = 'Sample Description';
    component.currentTask.description = testDescription;
    fixture.detectChanges();
    const HTMLElement: HTMLElement = fixture.nativeElement;
    const heading = HTMLElement.querySelectorAll('p')!;
    expect(heading[0].textContent).toContain(testDescription);
  });

  it('check if risk is being genenrated', () => {
    const testRisk = 'Sample Risk';
    component.currentTask.risk = testRisk;
    fixture.detectChanges();
    const HTMLElement: HTMLElement = fixture.nativeElement;
    const heading = HTMLElement.querySelectorAll('p')!;
    expect(heading[1].textContent).toContain(testRisk);
  });
});
