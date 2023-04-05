import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { ProviderDto } from './dto/provider.dto';
import { ProviderCreateDto } from './dto/providerCreate.dto';
import { Provider } from './provider.entity';

@Injectable()
export class ProvidersService extends BaseService<Provider> {
    constructor(
        @Inject('ProvidersRepository')
        private readonly providersRepository: typeof Provider,
    ){
        super(providersRepository);
    }

    // async findAll(){
    //     return this.providersRepository.findAll<Provider>()
    // }

    // async create(providerDto: ProviderCreateDto){
    //     //var provider = new ProviderDto(providerDto);
    //     return await this.providersRepository.create(providerDto);
    // }
}
