import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TablesAreasComponent } from './tables-areas.component';

describe('TablesAreasComponent', () => {
  let component: TablesAreasComponent;
  let fixture: ComponentFixture<TablesAreasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
