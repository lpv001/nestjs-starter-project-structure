import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { Product } from './typeorm/entities/Product';
import { ProductModule } from './product/product.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      database: 'nestjs_tool_api',
      entities: [User, Product],
      synchronize: true,
      username: 'root',
      password: '',
    }),
    AuthModule,
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
