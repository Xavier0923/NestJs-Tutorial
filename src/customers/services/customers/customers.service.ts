import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
    private customers: Customer[] = [
        {
            id: 1,
            email: 'admin123@gmail.com',
            name: 'Danny Danny',
        },
        {
            id: 2,
            email: 'admin456@gmail.com',
            name: 'Adam Adam',
        },
        {
            id: 3,
            email: 'admin789@gmail.com',
            name: 'Spencer Spencer',
        },
    ];
    findCustomerById(id: number) {
        return this.customers.find((user) => user.id === id);
    }

    createCustomer(customerDto: CreateCustomerDto) {
        this.customers.push(customerDto);
    }

    getCustomers() {
        return this.customers;
    }
}
