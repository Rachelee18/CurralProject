# Esquema de modulo base (exemplo reutilizavel)

Este documento e um template para criar novos modulos no backend NestJS usando a mesma base da pasta vacas.

Use este esquema para entidades como: curral, leite, ordenha, etc.

## 1) Convencao de nomes

Escolha um nome base da entidade:

- singular: `vaca`
- plural (pasta/modulo): `vacas`
- classe principal: `Vacas`

Regra para novos modulos:

- pasta: `<entidadePlural>`
- arquivos: `<entidadePlural>.controller.ts`, `<entidadePlural>.service.ts`, `<entidadePlural>.repository.ts`, `<entidadePlural>.module.ts`
- DTO: `dto/<entidadePlural>.dto.ts`
- Entity: `entity/<entidadePlural>.entity.ts`

## 2) Estrutura de pastas

```txt
src/
  <entidadePlural>/
    <entidadePlural>.controller.ts
    <entidadePlural>.service.ts
    <entidadePlural>.repository.ts
    <entidadePlural>.module.ts
    dto/
      index.ts
      <entidadePlural>.dto.ts
    entity/
      <entidadePlural>.entity.ts
```

## 3) Template dos arquivos

Substitua:

- `<EntidadePlural>` por exemplo `Vacas`
- `<entidadePlural>` por exemplo `vacas`
- `<EntidadeSingular>` por exemplo `Vaca`

### 3.1 entity/<entidadePlural>.entity.ts

```ts
export class <EntidadePlural>Entity {
  id: number;
  nome: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### 3.2 dto/<entidadePlural>.dto.ts

```ts
import { ApiProperty } from '@nestjs/swagger';

export class Create<EntidadePlural>Dto {
  @ApiProperty({
    description: 'ID da entidade',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Nome da entidade',
    example: 'Exemplo',
  })
  nome: string;
}

export class Update<EntidadePlural>Dto {
  @ApiProperty({
    description: 'Nome da entidade',
    example: 'Exemplo atualizado',
    required: false,
  })
  nome?: string;
}
```

### 3.3 dto/index.ts

```ts
export * from './<entidadePlural>.dto';
```

### 3.4 <entidadePlural>.repository.ts

```ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Create<EntidadePlural>Dto, Update<EntidadePlural>Dto } from './dto';

@Injectable()
export class <EntidadePlural>Repository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Create<EntidadePlural>Dto) {
    return this.prisma.<entidadePlural>.create({ data });
  }

  async findAll() {
    return this.prisma.<entidadePlural>.findMany();
  }

  async findOne(id: number) {
    return this.prisma.<entidadePlural>.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Update<EntidadePlural>Dto) {
    return this.prisma.<entidadePlural>.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.<entidadePlural>.delete({
      where: { id },
    });
  }
}
```

### 3.5 <entidadePlural>.service.ts

```ts
import { Injectable } from '@nestjs/common';
import { Create<EntidadePlural>Dto, Update<EntidadePlural>Dto } from './dto';
import { <EntidadePlural>Repository } from './<entidadePlural>.repository';

@Injectable()
export class <EntidadePlural>Service {
  constructor(private readonly repository: <EntidadePlural>Repository) {}

  async create(data: Create<EntidadePlural>Dto) {
    return this.repository.create(data);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    return this.repository.findOne(id);
  }

  async update(id: number, data: Update<EntidadePlural>Dto) {
    return this.repository.update(id, data);
  }

  async remove(id: number) {
    return this.repository.remove(id);
  }
}
```

### 3.6 <entidadePlural>.controller.ts

```ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Create<EntidadePlural>Dto, Update<EntidadePlural>Dto } from './dto';
import { <EntidadePlural>Service } from './<entidadePlural>.service';

@ApiTags('<entidadePlural>')
@Controller('<entidadePlural>')
export class <EntidadePlural>Controller {
  constructor(private readonly service: <EntidadePlural>Service) {}

  @Post()
  create(@Body() dto: Create<EntidadePlural>Dto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: Update<EntidadePlural>Dto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
```

### 3.7 <entidadePlural>.module.ts

```ts
import { Module } from '@nestjs/common';
import { <EntidadePlural>Controller } from './<entidadePlural>.controller';
import { <EntidadePlural>Repository } from './<entidadePlural>.repository';
import { <EntidadePlural>Service } from './<entidadePlural>.service';

@Module({
  controllers: [<EntidadePlural>Controller],
  providers: [<EntidadePlural>Service, <EntidadePlural>Repository],
  exports: [<EntidadePlural>Service, <EntidadePlural>Repository],
})
export class <EntidadePlural>Module {}
```

## 4) Integracao no app.module.ts

No `src/app.module.ts`, adicione o modulo novo em `imports`.

```ts
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { <EntidadePlural>Module } from './<entidadePlural>/<entidadePlural>.module';

@Module({
  imports: [PrismaModule, <EntidadePlural>Module],
})
export class AppModule {}
```

## 5) Integracao no Prisma (schema.prisma)

Crie o model correspondente em `prisma/schema.prisma`.

```prisma
model <EntidadeSingular> {
  id        Int      @id @default(autoincrement())
  nome      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

Depois rode:

```bash
npm run prisma:init
```

## 6) Checklist rapido para novos modulos

1. Criar pasta `src/<entidadePlural>`.
2. Criar arquivos base controller, service, repository e module.
3. Criar DTOs em `dto/` e entity em `entity/`.
4. Exportar DTOs em `dto/index.ts`.
5. Registrar modulo em `src/app.module.ts`.
6. Criar model no `prisma/schema.prisma`.
7. Rodar migracao e generate (`npm run prisma:init`).
8. Testar endpoints CRUD no Swagger.

## 7) Exemplo de substituicao rapida (vacas -> currais)

- `<EntidadeSingular>`: `Curral`
- `<EntidadePlural>`: `Currais`
- `<entidadePlural>`: `currais`

Com isso, voce reaproveita toda a mesma base de arquitetura ja usada no modulo de vacas.
