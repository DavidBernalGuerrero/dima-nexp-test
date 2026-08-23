import { useEffect, useState } from "react";
import type { Duty } from "../types/duty.types"
import { getDuties } from "../services/duty.service";

interface UseDuties {
    duties: Duty[];
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

    return {duties};
}