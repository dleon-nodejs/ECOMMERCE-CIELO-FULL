import { ApiProperty } from '@nestjs/swagger';

export class CreateDebitCardDTO {
  @ApiProperty({
    description: 'Nome do proprietario do cartão',
    example: 'Deleon Dias Leite',
  })
  holder: string;

  @ApiProperty({
    description: 'Bandeira do cartão',
    example: 'Visa',
  })
  brand: string;

  @ApiProperty({
    description: 'Numero do cartão',
    example: '4929465240388137',
  })
  cardNumber: string;

  @ApiProperty({
    description: 'Validade do cartão',
    example: '06/2022',
  })
  expirationDate: string;

  @ApiProperty({
    description: 'CVV do cartão',
    example: '123',
  })
  securityCode: string;
}
