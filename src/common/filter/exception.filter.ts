
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { HttpAdapterHost, AbstractHttpAdapter } from "@nestjs/core"
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private httpAdapter: AbstractHttpAdapter;

  constructor(adapterHost: HttpAdapterHost){
    this.httpAdapter = adapterHost.httpAdapter;
  }
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const {status, body} =
      exception instanceof HttpException
        ?{
          status: exception.getStatus(),
          body: exception.getResponse()
        }
        :{
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          body:{
            statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
            message: exception.message
          }
        }

    

    // response.status(status).json({
    //   statusCode: status,
    //   timestamp: new Date().toISOString(),
    //   path: request.url,
    //   //isValid:false,
    //   message: exception.message
    // });
    this.httpAdapter.reply(response, body, status);
  }
}
