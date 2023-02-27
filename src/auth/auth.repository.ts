import { Prisma, User } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthRepository {
  constructor(private prisma: PrismaService) {}

  validateSpecificUserByEmail(email: string) {
    return Prisma.validator<Prisma.UserWhereInput>()({
      email,
    });
  }

  validateSpecificUserById(id: number) {
    return Prisma.validator<Prisma.UserWhereInput>()({
      id,
    });
  }

  validateAllUsers() {
    return Prisma.validator<Prisma.UserFindManyArgs>()({});
  }

  validateCreateUser(data: Prisma.UserCreateInput) {
    return Prisma.validator<Prisma.UserCreateInput>()({
      email: data.email,
      hashed_password: data.hashed_password,
    });
  }

  validateUpdateUser(data: Prisma.UserUpdateInput) {
    return Prisma.validator<Prisma.UserUpdateInput>()({
      email: data.email,
      hashed_password: data.hashed_password,
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
    });
  }

  validateDeleteUser(id: number) {
    return Prisma.validator<Prisma.UserDeleteArgs>()({
      where: this.validateSpecificUserById(id),
    });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: this.validateSpecificUserByEmail(email),
    });
  }

  async findUserById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: this.validateSpecificUserById(id),
    });
  }

  async findAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany(this.validateAllUsers());
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: this.validateCreateUser(data),
    });
  }

  async updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: this.validateSpecificUserById(id),
      data: this.validateUpdateUser(data),
    });
  }

  async deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: this.validateSpecificUserById(id),
    });
  }
}
