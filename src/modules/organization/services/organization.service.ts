import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Organization } from '../entities/organization.entity';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from '../dto/createOrganization.dto';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private readonly repo: Repository<Organization>,
  ) {}

  public async create(
    createOrganizationDto: CreateOrganizationDto,
  ): Promise<any> {
    const appointment = await this.repo.create(createOrganizationDto);
    return this.repo.save(appointment);
  }

  public async findOne(id: number) {
    if (!id) {
      return null;
    }
    const org = await this.repo.findOneBy({ id });
    if (!org) {
      throw new NotFoundException('orgnization not found');
    }
    return org;
  }
}
