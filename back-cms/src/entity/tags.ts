import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity()
export class Tag extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

}