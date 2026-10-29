import { Injectable } from '@nestjs/common';
import { eventDTO } from './dto/event.dto';
import crypto from 'crypto';
@Injectable()
export class EventService {
    events: eventDTO[] = [];

    showAll(): eventDTO[] {
        return this.events;
    }

    createEvent(event: eventDTO): void {
        // if (event && event.description && event.start && event.end) {
            this.events.push({...event, id: crypto.randomUUID()});
        // }
        
    }
}
