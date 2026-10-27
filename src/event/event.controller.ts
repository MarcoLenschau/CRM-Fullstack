import { Body, Controller, Get, Post } from '@nestjs/common';
import { eventDTO } from './dto/event.dto';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
    constructor(private eventService: EventService) {}

    @Get()
    showAllEvents() {
        this.eventService.showAll();
    }

    @Post()
    createNewEvent(@Body() eventObj: eventDTO) {
        this.eventService.createEvent(eventObj);    
    }
}
