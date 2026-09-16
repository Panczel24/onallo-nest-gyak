import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service.js';

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
    if(szam<0.5){
      szin = "red";
    }else{
      szin = "blue"
    }

    return {
      szin
    };








  }
}

