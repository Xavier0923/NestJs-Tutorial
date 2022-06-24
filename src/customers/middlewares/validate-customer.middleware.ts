import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Hello World, I am inside ValidateCustomerMiddleware', req);
        res.status(HttpStatus.OK).send('你, 被攔截了');
    }
}
