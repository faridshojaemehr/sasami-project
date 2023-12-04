import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';
import { ApponitmentsService } from '../services/apponitments.service';

@Controller('appointment')
export class AppointmentController {
  constructor(private appointmentService: ApponitmentsService) {}
  @Post('create')
  public async createAppointment(
    @Body()
    createApponitmentDto: CreateAppointmentDto,
  ) {
    const apponitment = await this.appointmentService.create(
      createApponitmentDto,
    );
    return apponitment;
  }

  @Get()
  public async findAllAppointments() {
    const apponitments = await this.appointmentService.find();
    return apponitments;
  }

  @Get('/:id')
  public async findAppointment(@Param('id') id: number) {
    const appointment = await this.appointmentService.findOne(id);
    return appointment;
  }

  @Patch('/:id')
  public async updateAppointment(
    @Param('id') id: number,
    @Body() body: UpdateAppointmentDto,
  ) {
    const appointment = await this.appointmentService.update(id, body);
    return appointment;
  }

  @Delete('/:id')
  public async removeAppointment(@Param('id') id: number) {
    const appointment = await this.appointmentService.remove(id);
    return appointment;
  }

  @Get('/organization/:id')
  public async getAppointmentsByOrgId(@Param('id') id: number) {
    const result = await this.appointmentService.getAppointmentsByOrg(id);
    return result;
  }
}
