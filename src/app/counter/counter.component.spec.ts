import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('counter component: ', () => {
  let fixture: ComponentFixture<CounterComponent>, component:CounterComponent;
  beforeEach(/* async */() => {
    // 1
    /* await  */TestBed.configureTestingModule({ imports: [CounterComponent] })
    //.compileComponents()
    // 2
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should set counter=0 and update it in template",()=>{
    expect(component.counter).toBe(0)

    // update template
    fixture.detectChanges()
    // access p tag (1)
    // let pTag=fixture.debugElement.query( By.css("p") )
    // expect(pTag.nativeElement.textContent).toContain("0")
    // access p tag (2)
    let pTag= fixture.nativeElement.querySelector("p")
    expect(pTag.textContent).toContain("0")
  })
  it("should increase counter when clicking btn and update template",()=>{
    // access btn
    let btn= fixture.debugElement.query( By.css("#inc") )
    // fire click
    btn.triggerEventHandler("click")
    btn.triggerEventHandler("click")
    btn.triggerEventHandler("click")
    // assert counter
    expect(component.counter).toBe(3)
    // assert template
    // access p tag (2)
    fixture.detectChanges()
    let pTag= fixture.nativeElement.querySelector("p")
    expect(pTag.textContent).toContain("3") 
  })
});
