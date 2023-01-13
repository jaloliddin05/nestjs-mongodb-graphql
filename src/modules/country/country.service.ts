import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Country } from './interface/country.interface';
import { CreateCountryInput, UpdateCountryInput } from './dto';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel('Country')
    private readonly countryModel: Model<Country>,
  ) {}

  async create(data: CreateCountryInput): Promise<Country> {
    const country = new this.countryModel(data);
    await country.save();
    return country;
  }

  async getAll(): Promise<any> {
    return await this.countryModel.find({});
  }

  async getOne(id: string): Promise<Country> {
    return await this.countryModel.findById(id);
  }

  async update(id: string, updateData: UpdateCountryInput) {
    return await this.countryModel.updateOne({ _id: id }, updateData);
  }

  async delete(id: string): Promise<Country> {
    return await this.countryModel.findByIdAndDelete(id);
  }
}
