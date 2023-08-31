import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: string;

  @Column()
  date: Date;

  @Column()
  title: string;
}

