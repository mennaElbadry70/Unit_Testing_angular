import { HeroServiceForLab } from './hero.lab.service';
import { provideHttpClient } from '@angular/common/http';
import {
  provideHttpClientTesting,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Hero } from '../../hero';

fdescribe('HeroServiceForLab HTTP integration testing:', () => {
  let httpTesting: HttpTestingController;
  let service: HeroServiceForLab;
  const heroesUrl = 'http://localhost:3000/heroes';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroServiceForLab,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HeroServiceForLab);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('getHeroes function: send request and receive response successfully', () => {
    const mockHeroes: Hero[] = [
      { id: 1, name: 'IronMan', strength: 100 },
      { id: 2, name: 'AntMan', strength: 50 },  
    ];

    service.getHeroes().subscribe({
      next: (data) => {
        expect(data).toEqual(mockHeroes);
      },
    });

    const req = httpTesting.expectOne(heroesUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockHeroes);
  });

  it('updateHero function: send request and receive response successfully', () => {
    const heroToUpdate: Hero = { id: 1, name: 'IronMan', strength: 100 }; 

    service.updateHero(heroToUpdate).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpTesting.expectOne(heroesUrl);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(heroToUpdate);
    req.flush(heroToUpdate);
  });
});
