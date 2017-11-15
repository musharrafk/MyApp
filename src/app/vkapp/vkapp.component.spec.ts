import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VkappComponent } from './vkapp.component';

describe('VkappComponent', () => {
  let component: VkappComponent;
  let fixture: ComponentFixture<VkappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VkappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VkappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
