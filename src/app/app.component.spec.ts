import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { by, By } from 'protractor';
import { GREETINGS } from 'src/assets/greetings';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent]
      }).compileComponents();
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'I´m Clemens Ulbrich'
    );
  });

  it('should render a greeting in a h2 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(
      GREETINGS.includes(compiled.querySelector('h2').textContent)
    ).toBeTrue();
  });

  it('should load dark theme from storage', () => {
    localStorage.setItem('theme', 'dark');

    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    expect(
      document.documentElement.getAttribute('data-theme') === 'dark'
    ).toBeTrue();
  });

  it('should switch to dark theme', () => {
    const fixture = TestBed.createComponent(AppComponent);

    fixture.componentInstance.onThemeChange(true);

    fixture.detectChanges();

    expect(
      document.documentElement.getAttribute('data-theme') === 'dark'
    ).toBeTrue();
    expect(localStorage.getItem('theme') === 'dark').toBeTruthy();
  });

  it('should switch to light theme', () => {
    const fixture = TestBed.createComponent(AppComponent);

    localStorage.setItem('theme', 'dark');
    fixture.detectChanges();

    fixture.componentInstance.onThemeChange(false);
    fixture.detectChanges();

    expect(
      document.documentElement.getAttribute('data-theme') === 'light'
    ).toBeTrue();
    expect(localStorage.getItem('theme') === null).toBeTruthy();
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
