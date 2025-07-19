import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonelessUtils } from './zoneless-utils';

describe('ZonelessUtils', () => {
  let component: ZonelessUtils;
  let fixture: ComponentFixture<ZonelessUtils>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonelessUtils]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonelessUtils);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
