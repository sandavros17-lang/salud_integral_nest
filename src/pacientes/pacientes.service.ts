import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service.js'
import { CreatePacienteDto } from './dto/create-paciente.dto.js'
import { UpdatePacienteDto } from './dto/update-paciente.dto.js'

@Injectable()
export class PacientesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.paciente.findMany()
  }

  findOne(id: number) {
    return this.prisma.paciente.findUnique({ where: { id } })
  }

  create(data: CreatePacienteDto) {
    const fecha = new Date(data.fechaNacimiento)
    if (fecha > new Date()) {
      throw new BadRequestException('La fecha de nacimiento no puede ser futura')
    }
    return this.prisma.paciente.create({
      data: {
        ...data,
        fechaNacimiento: fecha,
      },
    })
  }

  update(id: number, data: UpdatePacienteDto) {
    let fechaActualizada: Date | undefined
    if (data.fechaNacimiento !== undefined) {
      fechaActualizada = new Date(data.fechaNacimiento)
      if (fechaActualizada > new Date()) {
        throw new BadRequestException('La fecha de nacimiento no puede ser futura')
      }
    }

    return this.prisma.paciente.update({
      where: { id },
      data: {
        ...data,
        ...(fechaActualizada && { fechaNacimiento: fechaActualizada }),
      },
    })
  }

  remove(id: number) {
    return this.prisma.paciente.delete({ where: { id } })
  }
}