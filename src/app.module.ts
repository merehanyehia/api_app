import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { OrganizationModule } from './organization/organization.module';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE } from '@nestjs/core';
import { CustomFilter } from './exception/exception.filter';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    MongooseModule.forRoot(process.env.DB_URL),

    AuthModule,

    OrganizationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
