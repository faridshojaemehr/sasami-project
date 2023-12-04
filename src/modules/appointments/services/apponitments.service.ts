import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizationService } from 'src/modules/organization/services/organization.service';
import { Repository } from 'typeorm';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { Appointment } from '../entities/appointment.entity';

@Injectable()
export class ApponitmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly repo: Repository<Appointment>,
    private orgService: OrganizationService,
  ) {}

  public async create(createAppointment: CreateAppointmentDto): Promise<any> {
    const appointment = await this.repo.create(createAppointment);
    if (appointment) {
      appointment.createdAt = new Date();
    }
    const org = await this.orgService.findOne(createAppointment.organizationId);
    if (org) {
      appointment.organization = org;
    }
    return this.repo.save(appointment);
  }

  public async find() {
    const apponitments = await this.repo.find();
    if (!apponitments) {
      throw new NotFoundException('not found apponintments');
    }
    return apponitments;
  }

  public async findOne(id: number) {
    if (!id) {
      return null;
    }
    const apponitment = await this.repo.findOneBy({ id });
    if (!apponitment) {
      throw new NotFoundException('apponitment not found');
    }

    return apponitment;
  }

  public async update(id: number, attrs: Partial<Appointment>) {
    const appointment = await this.findOne(id);
    if (appointment) {
      appointment.updatedAt = new Date();
    } else {
      throw new NotFoundException('appointment not found');
    }
    Object.assign(appointment, attrs);
    return this.repo.save(appointment);
  }

  public async remove(id: number) {
    const appointment = await this.findOne(id);
    if (!appointment) {
      throw new NotFoundException('appointment not found');
    }
    return this.repo.remove(appointment);
  }

  public async getAppointmentsByOrg(orgId: number) {
    const organization = await this.orgService.findOne(orgId);
    const result = await this.repo
      .createQueryBuilder('Appointment')
      .where({ organization: organization })
      .select([
        'Appointment.id',
        'Appointment.start',
        'Appointment.end',
        'Appointment.organization',
      ])
      .leftJoinAndSelect('Appointment.organization', 'organization')
      .getMany();
    return result;
  }
}
