import { Column, Entity, ObjectIdColumn } from 'typeorm'

@Entity()
export class User {
  @ObjectIdColumn()
  id?: string

  @Column({ default: null })
  name: string

  @Column({ default: null })
  email: string

  @Column({ nullable: false })
  username: string
}
