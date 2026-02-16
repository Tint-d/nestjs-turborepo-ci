import { CreateProductRequest } from '@repo/types';
import { IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto implements CreateProductRequest {
  @IsString()
  name!: string;

  @IsNumber()
  @Min(0)
  price!: number;
}
