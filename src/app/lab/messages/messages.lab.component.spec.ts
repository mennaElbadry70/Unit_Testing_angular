import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponentForLab } from './messages.lab.component';
import { MessageService } from '../../services/message/message.service';

fdescribe('MessagesComponentForLab Integration Testing:', () => {
  let component: MessagesComponentForLab;
  let fixture: ComponentFixture<MessagesComponentForLab>;
  let mockMessageService: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj('MessageService', [
      'add',
      'update',
    ]);

    mockMessageService.messages = [
      { id: 1, message: 'Message 1' },
      { id: 2, message: 'Message 2' },
      { id: 3, message: 'Message 3' },
    ];

    TestBed.configureTestingModule({
      imports: [MessagesComponentForLab],
      providers: [{ provide: MessageService, useValue: mockMessageService }],
    });

    fixture = TestBed.createComponent(MessagesComponentForLab);
    component = fixture.componentInstance;
  });

  it('should create the MessagesComponentForLab', () => {
    expect(component).toBeTruthy();
  });

  it('should display messages from the MessageService', () => {
    fixture.detectChanges();

    const messageElements: HTMLElement[] =
      fixture.nativeElement.querySelectorAll('.msg');

    expect(messageElements.length).toBe(mockMessageService.messages.length);

    messageElements.forEach((element, index) => {
      expect(element.textContent).toContain(
        mockMessageService.messages[index].message
      );
    });
  });

  it('should have an empty message container when there are no messages', () => {
    mockMessageService.messages = [];

    fixture.detectChanges();

    const messageElements: HTMLElement[] =
      fixture.nativeElement.querySelectorAll('.msg');

    expect(messageElements.length).toBe(0);
  });
});
