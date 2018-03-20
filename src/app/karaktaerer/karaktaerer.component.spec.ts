/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KaraktaererComponent } from './karaktaerer.component';

describe('KaraktaererComponent', () => {
  let component: KaraktaererComponent;
  let fixture: ComponentFixture<KaraktaererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaraktaererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaraktaererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
