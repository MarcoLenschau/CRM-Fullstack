import { Injectable } from '@nestjs/common';
import { eventDTO } from './dto/event.dto';

@Injectable()
export class EventService {
    events: eventDTO[] = [];

    showAll(): eventDTO[] {
        return this.events;
    }

    createEvent(event: eventDTO): void {
        this.events.push(event)
    }
}
