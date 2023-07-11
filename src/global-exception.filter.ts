import { Catch, ArgumentsHost, Logger } from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter {
  private logger = new Logger('AppLogger');

  catch(exception: any, host: ArgumentsHost) {
    this.logger.error('Ocorreu um erro na aplicação', exception);
  }
}