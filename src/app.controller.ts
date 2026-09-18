import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import * as fs from 'fs';
import { Criminal } from './criminal.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('index')
  getHello() {
    return {
      szoveg: "Első önálló gyakorlás"

    }
  }

  @Get('bekezdesek')
  @Render('bekezdesek')
  getBekezdes() {

    const bekezdesek: string[] = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",

      "Cras venenatis euismod malesuada. Nullam ac erat ante. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",

      "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt."
    ]
    return {
      bekezdesek
    }
  }

  @Get('red-blue')
  @Render('red-blue')
  getRedBlue() {
    let szin = "";
    const szam = Math.random();
    //const bgColor = szam >0.5 ? "blue" : "red"
    if (szam < 0.5) {
      szin = "red";
    } else {
      szin = "blue"
    }

    return {
      szin
    };
  }



  @Get("wanted")
  @Render("wanted")
  getWanted() {

    const criminal = JSON.parse(
      fs.readFileSync('wanted.json', { encoding: 'utf-8' })
    ) as Criminal;

    return { criminal };
  }


  @Get('search')
  @Render("search")
  searchCrime(@Query("keresett") keresett: string) {

    if (!keresett) {
      return {
        talalatok: []
      }
    }

    const criminal = JSON.parse(
      fs.readFileSync('wanted.json', { encoding: 'utf-8' })
    ) as Criminal;

    return {
      talalatok: criminal.crimes.filter(c =>
        c.toLowerCase().includes(keresett.toLowerCase())
      )
    }
  }


  @Get('color-picker')
  @Render('color-picker')
  colorPicker(@Query('szin') szin: string) {

    if (!szin) {
      szin = '#000000';
    }

    return {
      szin
    };
  }


  @Get('quadratic')
  @Render('quadratic')
  GetQuadratic(
    @Query('a') a: string, @Query('b') b: string, @Query('c') c: string
  ) {

    if (!a || !b || !c) {
      return {
        eredmeny: ''
      };
    }

    const aSzam = Number(a);
    const bSzam = Number(b);
    const cSzam = Number(c);

    const diszkriminans = bSzam * bSzam - 4 * aSzam * cSzam;

    if (aSzam === 0) {
      return {
        eredmeny: 'Az a nem lehet 0!'
      };
    }

    if (diszkriminans < 0) {
      return {
        eredmeny: 'Nincs valós megoldás.'
      };
    }

    const x1 = (-bSzam + Math.sqrt(diszkriminans)) / (2 * aSzam);
    const x2 = (-bSzam - Math.sqrt(diszkriminans)) / (2 * aSzam);

    return {
      eredmeny: `x1 = ${x1}, x2 = ${x2}`
    };
  }

}

