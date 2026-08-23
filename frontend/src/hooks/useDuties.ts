import { useEffect, useState } from "react";
import type { CreateDutyInput, Duty, UpdateDutyInput } from "../types/duty.types"
import { createDuty, deleteDuty, getDuties, updateDuty } from "../services/duty.service";

interface UseDuties {
    duties: Duty[];
    addDuty: (data: CreateDutyInput) => Promise<void>;
    editDuty: (id: string, data: UpdateDutyInput) => Promise<void>;
    removeDuty: (id: string) => Promise<void>;
}

export const useDuties = (): UseDuties => {
    const [duties, setDuties] = useState<Duty[]>([]);

    useEffect(() => {
        const initializeDuties = async (): Promise<void> => {
            try {
                const data = await getDuties();

                setDuties(data);
            } catch (error) {
                console.error(error);
            }
        };

        void initializeDuties();

        return () => {};
    }, []);

    const addDuty = async (data: CreateDutyInput): Promise<void> => {
        const duty = await createDuty(data);

        setDuties((current) => [
            ...current,
            duty,
        ]);
    }

    const editDuty = async (
        id: string,
        data: UpdateDutyInput
    ): Promise<void> => {
        const updatedDuty = await updateDuty(
            id,
            data
        );

        setDuties((current) =>
            current.map((duty) =>
                duty.id === id
                    ? updatedDuty
                    : duty
            )
        );
    };

    const removeDuty = async (id: string): Promise<void> => {
        await deleteDuty(id);

        setDuties((current) => 
            current.filter(
                (duty) => duty.id !== id
            ));
    }

    return {duties, addDuty, editDuty, removeDuty};
}