import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({schema: 'nestjs_backend'})
export class Film {

    @PrimaryGeneratedColumn('uuid')
    film_id: string;

    @Column('character varying', {
        unique: true,
    })
    title:string;

    @Column('text', {
        unique: true
    })
    description:string;

    @Column('smallint') // Corrección para años
    release_year:number;

    @Column('smallint')
    language_id: number;

    @Column('smallint', {
        default: 3,
    })
    rental_duration:number;

    @Column('decimal', { // Corrección para manejar decimales en precios
        precision: 4,
        scale: 2,
        default: 4.99
    })
    rental_rate: number;

    @Column('smallint')
    lenght: number;

    @Column('decimal', {
        precision: 4,
        scale: 2,
        default: 19.99
    })
    replacement_cost: number;

    @Column('text', {
        default: 'G'
    })
    rating: string;

    @UpdateDateColumn()
    last_update: Date;

    @Column('text')
    special_features: string;

}
