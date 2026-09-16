import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return{
      szoveg:"Első önálló gyakorlás"
    }
  }

  @Get()
  @Render('bekezdesek')
  getBekezdes() {
    
      const bekezdesek: string[] =[
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque autem saepe omnis voluptatibus quam exercitationem ab a cupiditate, repellat mollitia odio quasi sint hic, inventore deserunt dolorem laudantium voluptas"
      ]
    return{
      bekezdesek
    }
  }



}
