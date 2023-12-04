import { IsArray, IsString } from 'class-validator';
import { Appointment } from 'src/modules/appointments/entities/appointment.entity';

export class CreateOrganizationDto {
  @IsString()
  name: string;
  @IsArray()
  apponitments: Appointment[];
}
