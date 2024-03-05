import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
    getHello(): string {
        return 'Hello, this is my first Nest.JS app';
    }
}
