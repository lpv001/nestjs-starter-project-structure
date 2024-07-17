import { Body, Controller, Post, UseGuards, ValidationPipe } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/createProduct.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller('products')
export class ProductController{
    constructor(private productService: ProductService){}

    @Post('create-product')
    @UseGuards(AuthGuard())
    signUp(@Body(ValidationPipe) data: CreateProductDto): Promise<CreateProductDto>{
        return this.productService.createProduct(data)
    }
}