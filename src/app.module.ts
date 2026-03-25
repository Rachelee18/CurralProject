import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurralModule } from './curral/curral.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, CurralModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
