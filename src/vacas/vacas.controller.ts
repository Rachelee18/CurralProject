import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('vacas')
@Controller('vacas')
export class VacasController {}
