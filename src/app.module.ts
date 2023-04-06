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

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'mysql.auto-unity.kinghost.net',
      port: 3306,
      username: 'autounity',
      password: 'n2p5k1',
      database: 'autounity',
      synchronize:true,
      autoLoadModels: true,
      define: {
        timestamps: false
      },
      // sync:{
      //   force:true
      // }
    }),
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
