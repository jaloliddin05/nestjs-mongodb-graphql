import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountryResolver } from './country.resolver';
import { CountryService } from './country.service';
import { Country, CountrySchema } from './schema/country.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
  ],
  providers: [CountryService, CountryResolver],
})
export class CountryModule {}
