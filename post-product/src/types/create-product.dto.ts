import {
  IsDecimal,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsUUID()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  readonly description: string;

  @IsNotEmpty()
  @IsDecimal()
  readonly value: number;
}
