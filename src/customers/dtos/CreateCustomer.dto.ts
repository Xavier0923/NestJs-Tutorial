import { Type } from 'class-transformer';
import {
    IsEmail,
    IsNotEmpty,
    IsNotEmptyObject,
    IsNumber,
    IsNumberString,
    ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from './CreateAddress.dto';

export class CreateCustomerDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    name: string;

    @ValidateNested()
    @Type(() => CreateAddressDto)
    @IsNotEmptyObject()
    address: CreateAddressDto;
}
