import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/typeorm/entities/Product";
import { Repository } from "typeorm";
import { CreateProductDto } from "./dto/createProduct.dto";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) { }

    async createProduct(createProductDto: CreateProductDto): Promise<CreateProductDto> {
        const product = await this.productRepository.save(this.productRepository.create(createProductDto))
        return product
    }
}