import { CreateEnvironment } from '../../../environment/dto/create.environment/create.environment'
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString
} from 'class-validator'

export class CreateProject {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsOptional()
  description: string

  @IsBoolean()
  storePrivateKey: boolean

  @IsArray()
  @IsOptional()
  environments: CreateEnvironment[]
}
