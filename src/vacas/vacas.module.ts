import { Module } from '@nestjs/common';
import { VacasRepository } from './vacas.repository';
import { VacasService } from './vacas.service';

@Module({
  controllers: [],
  providers: [VacasService, VacasRepository],
  exports: [VacasService, VacasRepository],
})
export class VacasModule {}
