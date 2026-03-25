import { ApiProperty } from '@nestjs/swagger';

export class CreateCurralDto {
  @ApiProperty({
    description: 'Nome do curral',
    example: 'Curral Norte',
  })
  nome: string;

  @ApiProperty({
    description: 'Localizacao do curral',
    example: 'Fazenda Santa Luzia - Setor A',
  })
  localizacao: string;
}

export class UpdateCurralDto {
  @ApiProperty({
    description: 'Nome do curral ou numero do curral',
    example: 'Curral Norte Atualizado',
    required: false,
  })
  nome?: string;

  @ApiProperty({
    description: 'Localizacao do curral',
    example: 'Fazenda Santa Luzia - Setor B',
    required: false,
  })
  localizacao?: string;
}
