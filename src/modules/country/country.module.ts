import { Module } from '@nestjs/common';
import { CountryService } from './country.service';

@Module({
  providers: [CountryService]
})
export class CountryModule {}
