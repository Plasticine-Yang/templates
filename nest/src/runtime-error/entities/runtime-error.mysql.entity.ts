import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class RuntimeError {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  errorMessage: string

  @Column({ nullable: false })
  rowNo: number

  @Column({ nullable: false })
  colNo: number
}
