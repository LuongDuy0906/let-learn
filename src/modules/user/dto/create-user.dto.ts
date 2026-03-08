import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    username?: string;

    @IsNotEmpty({message: "Email khong duoc de trong"})
    @IsEmail({}, {message: "Email khong dung dinh dang"})
    email!: string;

    @IsNotEmpty({message: "Mat khau khong duoc de trong"})
    password!: string;
}
