import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldNgIfComponent } from './hello-world-ngif.component';

describe('HelloWorldNgifComponent', () => {
  let component: HelloWorldNgIfComponent;
  let fixture: ComponentFixture<HelloWorldNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldNgIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
