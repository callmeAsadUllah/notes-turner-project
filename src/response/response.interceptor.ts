import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { User } from 'src/users/user.schema';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<User> {
    return next.handle().pipe(
      map((data: User) => {
        return {
          statusCode: HttpStatus.OK,
          ...data,
        };
      }),
    );
  }
}
