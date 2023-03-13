import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Opinion extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    summary: string

    @Column()
    body: string

    @Column()
    rating: number

    @Column()
    url: string
}
