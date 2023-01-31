import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDeleteComponent } from './posts-delete.component';

describe('PostsDeleteComponent', () => {
  let component: PostsDeleteComponent;
  let fixture: ComponentFixture<PostsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
