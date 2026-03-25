import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCurralDto, UpdateCurralDto } from './dto';

@Injectable()
export class CurralRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCurralDto) {
    return this.prisma.curral.create({ data });
  }

  async findAll() {
    return this.prisma.curral.findMany();
  }

  async findOne(id: number) {
    return this.prisma.curral.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateCurralDto) {
    return this.prisma.curral.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.curral.delete({
      where: { id },
    });
  }
}
