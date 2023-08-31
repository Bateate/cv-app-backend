import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { EventEntity } from './event/event.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [User, EventEntity],
    synchronize: true,
  }),
    UserModule,
    EventModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
