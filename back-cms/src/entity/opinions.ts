import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from "typeorm"
import { Tag } from "./tags"

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

    @ManyToMany(type => Tag) @JoinTable()
    tags: Tag[];
 }

