import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator'

export class CreatePacienteDto {
  @IsString()
  @IsNotEmpty({ message: 'El documento de identidad es obligatorio' })
  documentoIdentidad: string

  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string

  @IsString()
  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  apellido: string

  @IsDateString({}, { message: 'La fecha de nacimiento debe ser una fecha válida' })
  fechaNacimiento: string

  @IsString()
  @IsNotEmpty({ message: 'El teléfono es obligatorio' })
  telefono: string

  @IsString()
  @IsNotEmpty({ message: 'La dirección es obligatoria' })
  direccion: string

  @IsEmail({}, { message: 'El correo no tiene un formato válido' })
  correo: string
}