import { Module } from '@nestjs/common';
import { CurralController } from './curral.controller';
import { CurralRepository } from './curral.repository';
import { CurralService } from './curral.service';

@Module({
  controllers: [CurralController],
  providers: [CurralService, CurralRepository],
  exports: [CurralService, CurralRepository],
})
export class CurralModule {}
