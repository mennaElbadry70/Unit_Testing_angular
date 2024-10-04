import {SquarePipeForLab } from "./square.pipe";

fdescribe("1-square pipe (class only) testing:",()=>{
    let pipe:SquarePipeForLab 

    beforeEach(()=>{
        pipe = new SquarePipeForLab()
    })

    it("expect to return 16 when passing 4",()=>{
        expect(pipe.transform(4)).toBe(16)
    });


    it("expect to return 9 when passing '3'",()=>{
        expect(pipe.transform('3')).toBe(9)
    })

    it("expect to return 'not a number' when passing wrong parameter",()=>{
        expect(pipe.transform("text")).toBe("not a number")
    })
})