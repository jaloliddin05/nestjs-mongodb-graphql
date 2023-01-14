import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CountryService } from './country.service';
import { CountryR } from './schema/country.schema';
import { CreateCountryInput, UpdateCountryInput } from './dto';

@Resolver(() => CountryR)
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Mutation(() => CountryR, { name: 'createCountry' })
  createCountry(
    @Args('CreateCountryInput') createCountryInput: CreateCountryInput,
  ): Promise<CountryR> {
    return this.countryService.create(createCountryInput);
  }

  @Query(() => [CountryR], { name: 'findAllCountry' })
  findAll() {
    return this.countryService.getAll();
  }

  @Query(() => CountryR, { name: 'findOneCountry' })
  findOne(@Args('id') id: string) {
    return this.countryService.getOne(id);
  }

  @Mutation(() => CountryR, { name: 'updateCountry' })
  updateCountry(
    @Args('UpdateCountryInput') updateProjectInput: UpdateCountryInput,
  ) {
    return this.countryService.update(
      updateProjectInput.id,
      updateProjectInput,
    );
  }

  @Mutation(() => CountryR, { name: 'deleteCountry' })
  removeCountry(@Args('id') id: string) {
    return this.countryService.delete(id);
  }
}
