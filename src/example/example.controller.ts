import { Controller, Get } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {
    constructor(private readonly ExampleService: ExampleService) {}
    @Get()
    getExample(): string {
        return this.ExampleService.getHello();
    }

}
