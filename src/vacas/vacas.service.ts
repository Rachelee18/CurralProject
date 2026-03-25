import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { VacasRepository } from './vacas.repository';

@Injectable()
export class VacasService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly repository: VacasRepository,
  ) {}

  async create(VacasDto: VacasRepository) {
    return this.repository.create(VacasDto);
  }
}
