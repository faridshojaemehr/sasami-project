import { IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateAppointmentDto {
  @IsDate()
  start: Date;

  @IsDate()
  end: Date;

  @IsNumber()
  organizationId: number;
}
