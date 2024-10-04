import { MessageService } from "./message.service";

describe("message service:",()=>{  
  let messageService:MessageService
  beforeEach(()=>{
    messageService= new MessageService()
  })
  it('add() should add new msg', () => {
    messageService.add("msg 1")

    expect(messageService.messages[0].message).toBe("msg 1")
  });
  it("clear() should remove all msgs",()=>{
    messageService.add("msg 1")
    messageService.add("msg 2")

    messageService.clear()

    expect(messageService.messages).toHaveSize(0)
  })
})