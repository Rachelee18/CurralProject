import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VacasRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(VacasDto: VacasRepository) {}
}
