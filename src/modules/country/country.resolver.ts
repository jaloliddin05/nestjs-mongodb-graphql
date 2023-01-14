import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CountryService } from './country.service';
import { Country } from './schema/country.schema';
import { CreateCountryInput, UpdateCountryInput } from './dto';

@Resolver(() => Country)
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Mutation(() => Country, { name: 'createCountry' })
  createCountry(
    @Args('CreateCountryInput') createCountryInput: CreateCountryInput,
  ): Promise<Country> {
    return this.countryService.create(createCountryInput);
  }

  @Query(() => [Country], { name: 'findAllCountry' })
  findAll() {
    return this.countryService.getAll();
  }

  @Query(() => Country, { name: 'findOneCountry' })
  findOne(@Args('id') id: string) {
    return this.countryService.getOne(id);
  }

  @Mutation(() => Country, { name: 'updateCountry' })
  updateCountry(
    @Args('UpdateCountryInput') updateProjectInput: UpdateCountryInput,
  ) {
    return this.countryService.update(
      updateProjectInput.id,
      updateProjectInput,
    );
  }

  @Mutation(() => Country, { name: 'deleteCountry' })
  removeCountry(@Args('id') id: string) {
    return this.countryService.delete(id);
  }
}
