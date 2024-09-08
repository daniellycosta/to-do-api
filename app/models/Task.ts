import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm";

@Entity()
export class Task {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column({ name: "completed_at", nullable: true })
  completedAt!: Date;

  @Column({ name: "created_at", nullable: false })
  createdAt!: Date;

  @Column({ name: "updated_at", nullable: true })
  updatedAt!: Date;
}
