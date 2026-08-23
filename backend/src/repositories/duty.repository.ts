import { Pool } from "pg";
import type { IDutyRepository } from "../interfaces/duty.interface.ts";
import type { Duty, CreateDutyDTO, UpdateDutyDTO } from "../types/duty.types.ts";

export class DutyRepository implements IDutyRepository {
    private readonly db: Pool;
    
    constructor(db: Pool) { this.db = db }

    async getDuties(): Promise<Duty[]> {
        const result = await this.db.query<Duty>(
            `
                SELECT * FROM public.duty
                ORDER BY id ASC 
            `);

        return result.rows;
    }
    async addDuty(data: CreateDutyDTO): Promise<Duty> {
        const result = await this.db.query<Duty>(
            `
                INSERT INTO public.duty(
                    id, name)
                    VALUES ($1, $2)
                RETURNING
                    id,
                    name
            `,
            [ data.id, data.name ]
        );

        return result.rows[0] ?? null;
    }
    async updateDuty(id: string, data: UpdateDutyDTO): Promise<Duty> {
        const result = await this.db.query<Duty>(
            `
            UPDATE public.duty
                SET id=$1, name=$2
                WHERE id=$3
            RETURNING
                id,
                name
            `,
            [ data.id, data.name, id ]
        );

        return result.rows[0] ?? null;
    }
    async deleteDuty(id: string): Promise<boolean> {
        const result = await this.db.query<Duty>(
            `
                DELETE FROM public.duty
                WHERE id = $1
            `,
            [ id ]
        );

        return result.rowCount === 1;
    }
}