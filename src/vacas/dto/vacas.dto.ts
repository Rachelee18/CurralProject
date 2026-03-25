import { ApiProperty } from '@nestjs/swagger';

export class CreateVacasDto {
  @ApiProperty({
    description: 'ID da vaca',
    example: 1,
  })
  id: number;
  @ApiProperty({
    description: 'Nome da vaca',
    example: 'Bela',
  })
  nome: string;
  @ApiProperty({
    description: 'Idade da vaca',
    example: 5,
  })
  idade: number;
  @ApiProperty({
    description: 'Raça da vaca',
    example: 'Holandesa',
  })
  raca: string;
}
