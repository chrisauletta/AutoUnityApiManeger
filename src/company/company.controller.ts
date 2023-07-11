
import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../base/base.controller';
import { Company } from './company.entity';
import { CompanyService } from './company.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Helper } from '../helper/helper';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';
import { User } from '../user/user.decorator';
import { join } from 'path';
import { Response } from 'express';
import { writeFile } from 'fs';

@Controller('company')
@ApiTags('company')
export class CompanyController extends BaseController<Company> {
    constructor(private readonly companyServices: CompanyService){
        super(companyServices);
    }

    @Post('update')
    async uploadImage(@Body() body) {
        return this.companyServices.edit(body.company, body.file);    
    }
    // @UseInterceptors(FileInterceptor('file', 
    // {
    //     storage:diskStorage({
    //         destination:'upload',
    //         filename: Helper.customFilename,
    //     })
    // }))
    // //@UseGuards(JwtAuthGuard)
    // uploadFile(
    //     @Body() entity,
    //    // @User() user: any,
    //     @UploadedFile() file: Express.Multer.File) {
    //         var company = JSON.parse(entity.company);
    //         if(file){
    //             company.logo = file.filename;
    //         }
    //         return this.companyServices.edit(company);
    // }

    @Get('logo/:nomeArquivo')
    async serveImagem(@Param('nomeArquivo') nomeArquivo: string, @Res() res: Response) {
      return res.sendFile(join(process.cwd(), 'upload', nomeArquivo));
    }
     @Get('teste')
     teste(){
         return "teste";
     }
  

	// @Put(':id')
	// async update2(@Body() entity)  {
	//   return "teste";
	// }
    // @Get()
    // @ApiOkResponse({type: [CustomerEntity]})
    // findAll():Promise<CustomerEntity[]>{
    //     return this.customersServices.findAll();
    // }

    // @Get('find')
    // @ApiOkResponse({type: [CustomerEntity]})
    // findByParameter(@Query() query: FilterDto){
    //     return this.customersServices.findByParameter(query.column, query.value, query.table, query.search);
    // }

    // @Post()
    // create(
    //     @Body() companytDto,
    // ) {
    //     return this.companyServices.create(companytDto);
    // }

    // @Put('/teste')
    // @ApiCreatedResponse({ type: CustomerEntity })
    // @ApiBearerAuth()
    // async edit(
    //     @Param('id') id: number,
    // ) {
    //     return "treste";
    // }

    // @Delete(':id')
    // async destroy(@Param() params){
    //     this.customersServices.delete(params.id);
    // }
}
