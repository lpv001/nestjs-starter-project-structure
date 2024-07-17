import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
// import { CreateUserDto } from "./dto/CreateUser.dto";
import { User } from "src/typeorm/entities/User";
import { SignUpDto } from "./dto/signup.dto";
import { SignInDto } from "./dto/signin.dto";

@Controller('users')
export class AuthController {
    constructor(private authService: AuthService) { }

    // @MessagePattern({ cmd: 'createUser' })
    // createUser(@Payload() data: CreateUserDto) {
    //     return this.userService.createUser(data);
    // }

    // @MessagePattern({ cmd: 'getUserByUsername' })
    // getUserById(@Payload() data) {
    //     const { userName } = data;
    //     return this.userService.getUserByUsername(userName);
    // }

    // @Post('createUser')
    // async createUser(@Body(ValidationPipe) data: CreateUserDto): Promise<User> {
    //     try {
    //         const user = await this.userService.createUser(data)
    //         return user;
    //     } catch (error) {
    //         throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // }

    // @Get(':id')
    // async getUserById(@Param('id') id: number): Promise<User | undefined>{
    //     return await this.userService.getUserById(id)
    // }

    @Post('/signup')
    signUp(@Body(ValidationPipe) data: SignUpDto): Promise<{token: string}>{
        return this.authService.signUp(data);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) data: SignInDto): Promise<{token: string}>{
        return this.authService.signIn(data);
    }

}