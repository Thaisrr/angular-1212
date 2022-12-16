import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyCorsComponent } from './proxy-cors.component';

describe('ProxyCorsComponent', () => {
  let component: ProxyCorsComponent;
  let fixture: ComponentFixture<ProxyCorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProxyCorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProxyCorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
