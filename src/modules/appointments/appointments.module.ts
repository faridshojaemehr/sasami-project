import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { AppointmentController } from './controllers/appointment.controller';
import { ApponitmentsService } from './services/apponitments.service';
import { OrganizationModule } from '../organization/organization.module';

@Module({
  imports: [TypeOrmModule.forFeature([Appointment]), OrganizationModule],
  controllers: [AppointmentController],
  providers: [ApponitmentsService],
})
export class AppointmentsModule {}
