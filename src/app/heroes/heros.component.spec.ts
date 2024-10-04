import { of } from "rxjs";
import { HeroService } from "../services/hero service/hero.service";
import { HeroesComponent } from "./heroes.component";
import { Hero } from "../hero";

describe("heroes component", () => {  
  let component:HeroesComponent,mockHeroService:jasmine.SpyObj<HeroService>
  let mockHeros:Hero[]
  beforeEach(()=>{
    // mocking 
    mockHeroService=jasmine.createSpyObj(["getHeroes","addHero","deleteHero"])
    mockHeros=[
      {id:100,name:"superman",strength:11},
      {id:101,name:"batman",strength:15},
      {id:101,name:"spider man",strength:20},
    ]
    mockHeroService.getHeroes.and.returnValue( of(mockHeros) )
    component= new HeroesComponent(mockHeroService)
  })
  it('should have heros after calling getHeros', () => {
    component.ngOnInit()

    expect(mockHeroService.getHeroes).toHaveBeenCalled()
    expect(component.heroes).toEqual(mockHeros)
  });
})