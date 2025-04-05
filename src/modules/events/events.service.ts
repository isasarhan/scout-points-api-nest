import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EventType, IEvent } from './interface/event.interface';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './schema/event.schema';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
    constructor(@InjectModel(Event.name) private eventModel: Model<Event>) { }

    async create(eventDto: CreateEventDto): Promise<IEvent> {
        if (!eventDto.endDate)
            eventDto.endDate = eventDto.startDate
        const event = new this.eventModel({
            ...eventDto,
        });

        return await event.save();
    }

    async update(id: string, eventDto: UpdateEventDto): Promise<IEvent | null> {
        return await this.eventModel.findByIdAndUpdate(id, {
            $set: eventDto
        }, { new: true })
    }

    async findByType(type: EventType): Promise<IEvent | null> {
        return await this.eventModel.findOne({ type }).populate('departments', 'name _id').populate('attendees.user', 'firstName lastName email').exec()
    }

    async findById(id: string) {
        return await this.eventModel.findById(id).populate('departments', 'name _id').populate('attendees.user', 'firstName lastName email').exec()
    }

    async findAll(): Promise<IEvent[]> {
        return await this.eventModel.find().populate('departments', 'name _id').populate('attendees.user', 'firstName lastName email')
    }

    async delete(id: string) {
        return await this.eventModel.findByIdAndDelete(id)
    }
}
