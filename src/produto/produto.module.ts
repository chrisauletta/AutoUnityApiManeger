import { Module } from '@nestjs/common';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Produto } from './produto.model';
@Module({
    imports:[SequelizeModule.forFeature([Produto])],
    controllers:[ProdutosController],
    providers:[ProdutosService]
})

export class produtoModule {}