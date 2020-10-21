import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('I´m Clemens Ulbrich');
  });

  it('should render a linkedin button', () => {
    shouldRenderButton('linkedin', 'LinkedIn');
  });

  it('should render a instagram button', () => {
    shouldRenderButton('instagram', 'Instagram');
  });

  it('should render a twitter button', () => {
    shouldRenderButton('twitter', 'Twitter');
  });
});


function shouldRenderButton(id: string, text: string) {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const compiled = fixture.debugElement.nativeElement;
  expect(compiled.querySelector(`#${id}`).textContent).toContain(text);
}
