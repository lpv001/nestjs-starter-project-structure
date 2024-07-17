import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/typeorm/entities/Product";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [
        AuthModule,
        TypeOrmModule.forFeature([Product]),
    ],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule { }
