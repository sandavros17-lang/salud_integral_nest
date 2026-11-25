import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator'

export class CreateMedicoDto {
  @IsString()
  @IsNotEmpty({ message: 'El documento de identidad es obligatorio' })
  documentoIdentidad: string

  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string

  @IsString()
  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  apellido: string

  @IsEmail({}, { message: 'El correo no tiene un formato válido' })
  correo: string

  @IsString()
  @IsNotEmpty({ message: 'El teléfono es obligatorio' })
  telefono: string

  @IsInt({ message: 'especialidadId debe ser un número entero' })
  especialidadId: number

  @IsBoolean()
  @IsOptional()
  estado?: boolean
}