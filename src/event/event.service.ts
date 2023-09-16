import { Injectable, NotFoundException } from '@nestjs/common';
import { EventEntity } from './event.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEventInterface } from './event.interfaces';

@Injectable()
export class EventService {
  constructor(@InjectRepository(EventEntity) private repo: Repository<EventEntity>) { }
  create(params: CreateEventInterface) {
    const event = this.repo.create(params);
    console.log('event', event);
    return this.repo.save(event);
  }



  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  find(userId: number) {
    return this.repo.find({ where: { userId } });
  }

  async update(id: number, attrs: Partial<EventEntity>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.repo.remove(user);
  }
}
