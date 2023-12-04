import { Organization } from 'src/modules/organization/entities/organization.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start: Date;

  @Column()
  end: Date;

  @Column()
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;

  @ManyToOne(() => Organization, (org) => org.apponitments)
  @JoinColumn()
  organization: Organization;

  @AfterInsert()
  private logInsert() {
    console.log(`Inserted Appointment with id :${this.id}`);
  }

  @AfterUpdate()
  private logUpdate() {
    console.log(`Updated Appointment with id :${this.id}`);
  }

  @AfterRemove()
  private logRemove() {
    console.log(`Removed Appointment with id :${this.id}`);
  }
}
