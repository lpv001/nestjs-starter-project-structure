import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User";
import { Repository } from "typeorm";
// import { CreateUserDto } from "./dto/CreateUser.dto";
import * as bcrypt from 'bcrypt'
import { SignUpDto } from "./dto/signup.dto";
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "./dto/signin.dto";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService,
    ) { }


    async signUp(signUpDto: SignUpDto) {
        signUpDto.password = await bcrypt.hash(signUpDto.password, 10)

        const user = await this.userRepository.save(this.userRepository.create(signUpDto))
        const token = this.jwtService.sign({ id: user.id })
        
        return { token }
    }

    async signIn(signInDto: SignInDto): Promise<{ token: string }> {
        const { email, password } = signInDto

        const user = await this.userRepository.findOne({ where: { email: email } })

        if (!user) {
            throw new UnauthorizedException('Invalid email or password')
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)

        if (!isPasswordMatched) {
            throw new UnauthorizedException('Invalid password')
        }
        const token = this.jwtService.sign({ id: user.id })

        return { token }
    }


    // createUser(createUserDto: CreateUserDto){
    //     const user = this.userRepository.create(createUserDto)
    //     return this.userRepository.save(user)
    // }

    // getUserByUsername(userName: string){
    //     return this.userRepository.findOne({
    //         where: {username: userName}
    //     })
    // }

    // getUserById(userId: number){
    //     return this.userRepository.findOne({ where: {id: userId.toString()} })
    // }
}