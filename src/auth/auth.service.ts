import { Injectable, UnauthorizedException } from '@nestjs/common'
import { createRequire } from 'node:module'
import { PrismaService } from '../prisma/prisma.service.js'

const require = createRequire(import.meta.url)
const bcrypt = require('bcryptjs') as typeof import('bcryptjs')
const jwt = require('jsonwebtoken') as typeof import('jsonwebtoken')

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(email: string, password: string, role: string) {
    const hashedPassword = await bcrypt.hash(password, 10)
    return this.prisma.usuarios.create({
      data: {
        email,
        password: hashedPassword,
        role,
      },
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
      },
    })
  }

  async login(email: string, password: string) {
    const user = await this.prisma.usuarios.findUnique({
      where: { email },
    })

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Credenciales inválidas')
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: '8h' },
    )

    return { token }
  }
}