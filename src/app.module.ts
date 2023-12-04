import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { OrganizationModule } from './modules/organization/organization.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'sasami',
      entities: ['dist/**/**/*.entity{.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AppointmentsModule,
    OrganizationModule,
  ],
})
export class AppModule {}
