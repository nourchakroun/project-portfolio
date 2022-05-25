import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesiteComponent } from './tablesite.component';

describe('TablesiteComponent', () => {
  let component: TablesiteComponent;
  let fixture: ComponentFixture<TablesiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
