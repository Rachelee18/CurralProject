import { Injectable } from '@nestjs/common';
import { CreateCurralDto, UpdateCurralDto } from './dto';
import { CurralRepository } from './curral.repository';

@Injectable()
export class CurralService {
  constructor(private readonly repository: CurralRepository) {}

  async create(data: CreateCurralDto) {
    return this.repository.create(data);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    return this.repository.findOne(id);
  }

  async update(id: number, data: UpdateCurralDto) {
    return this.repository.update(id, data);
  }

  async remove(id: number) {
    return this.repository.remove(id);
  }
}
