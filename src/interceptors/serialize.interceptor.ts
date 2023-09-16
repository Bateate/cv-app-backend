
import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    console.log('context: ', context);
    // throw new Error('Method not implemented.');
    return next.handle().pipe(
      map((data: any) => {
        console.log('Running before response is sent out ', data);
      })
    )
  }

}