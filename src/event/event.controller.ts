import { Controller, Get, Post, Body } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dtos/create-event.dto';

@Controller('event')
export class EventController {

  constructor(private eventService: EventService) { }

  @Post('/new')
  createEvent(@Body() body: CreateEventDto) {
    this.eventService.create({ user: body.userId, date: body.date, title: body.title });
  }
}
