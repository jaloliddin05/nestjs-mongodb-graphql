import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CountryModule } from './modules/country/country.module';

import configuration from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    CountryModule,
  ],
})
export class AppModule {}
