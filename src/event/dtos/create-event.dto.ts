import { IsEmail, IsString, IsDate, IsNumber, IsOptional, MinDate } from 'class-validator'
import { Transform, Type } from 'class-transformer';

export class CreateEventDto {
  @IsString()
  title: string;

  @IsOptional()
  @Transform(({ value }) => value && new Date(value))
  @IsDate()
  @MinDate(new Date())
  date?: Date;

  @IsNumber()
  userId: number;

  // @IsIn()
  // password: string;
}