import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/filter/exception.filter';
import { AuthModule } from './auth/auth.module';
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { produtoModule } from './produto/produto.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { userModule } from './user/user.module';
import { CustomersModule } from './customer/customers.module';
import { VehiclesModule } from './vehicle/vehicles.module';
import { BudgetsModule } from './budget/budgets.module';
import { PartsModule } from './parts/parts.module';
import { ServiceModule } from './service/serivces.module';
import { ProvidersModule } from './provider/providers.module';
import { HelperInterceptor } from './helper.interceptor';
import { BudgetsPartsModule } from './budgetPart/budgetsParts.module';
import { BudgetsServicesModule } from './budgetService/budgetsServices.module';
import { CompanyModule } from './company/company.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import path, { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'mysql26-farm10.kinghost.net',
      port: 3306,
      username: 'autounity',
      password: 'n2p5k1',
      database: 'autounity',
      // host: 'localhost',
      // port: 3306,
      // username: 'root',
      // password: '',
      // database: 'nest',
      synchronize:true,
      autoLoadModels: true,
      define: {
        timestamps: false
      },
      // sync:{
      //   force:true
      // }
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: '/upload', // I prefer to use resolve in your case it can be better to use path.join
    //   serveRoot: '/upload',
    // }),
   produtoModule,
   CompanyModule,
   userModule,
   AuthModule,
     CustomersModule,
     VehiclesModule,
    BudgetsModule,
    PartsModule,
    ServiceModule,
    ProvidersModule,
    BudgetsPartsModule,
    BudgetsServicesModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    HelperInterceptor,
    //  {
    //  provide: APP_INTERCEPTOR,
    //  useClass: ClassSerializerInterceptor
    // }
  ],
})
export class AppModule { }
