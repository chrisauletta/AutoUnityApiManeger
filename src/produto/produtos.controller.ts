import {Controller, Get, Param, Post, Body, Put, Delete, UseGuards} from "@nestjs/common"
import { Produto } from "./produto.model";
import { ProdutosService } from "./produtos.service";
import { JwtAuthGuard } from './../auth/shared/jwt-auth.guard';


@Controller('produtos')
export class ProdutosController {
    constructor(private produtosService: ProdutosService){

    }

  //  @UseGuards(JwtAuthGuard)
    @Get()
    async getProdutos(): Promise<Produto[]>{
        return this.produtosService.obterTodos();
    }

    @Get(':id')
    async getProdutoById(@Param() params): Promise<Produto>{
        return this.produtosService.obterUm(params.id);
    }

    @Post()
    async store(@Body() produto: Produto){
        this.produtosService.criar(produto);
    }

    @Put()
    async edit(@Body() produto): Promise<[number]> {
        return this.produtosService.alterar(produto);
    }

    @Delete(':id')
    async destroy(@Param() params){
        this.produtosService.apagar(params.id);
    }
}