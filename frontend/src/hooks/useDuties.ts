import { useEffect, useState } from "react";
import type { CreateDutyInput, Duty } from "../types/duty.types"
import { createDuty, getDuties } from "../services/duty.service";

interface UseDuties {
    duties: Duty[];
    addDuty: (data: CreateDutyInput) => Promise<void>;
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

    return {duties, addDuty};
}