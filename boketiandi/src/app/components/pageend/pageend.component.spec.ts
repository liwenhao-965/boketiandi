import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageendComponent } from './pageend.component';

describe('PageendComponent', () => {
  let component: PageendComponent;
  let fixture: ComponentFixture<PageendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
