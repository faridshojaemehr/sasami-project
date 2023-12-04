import { Appointment } from 'src/modules/appointments/entities/appointment.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Appointment, (appointment) => appointment.organization)
  apponitments: Appointment[];

  @AfterInsert()
  logInsert() {
    console.log(`Inserted Organization with id :${this.id}`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`Updated Organization with id :${this.id}`);
  }

  @AfterRemove()
  logRemove() {
    console.log(`Removed Organization with id :${this.id}`);
  }
}
