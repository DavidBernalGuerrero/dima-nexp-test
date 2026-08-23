import type { CreateDutyInput, Duty } from "../types/duty.types";

const API_URL = import.meta.env.VITE_API_URL;

export const getDuties = async (): Promise<Duty[]> => {
    const response = await fetch(`${API_URL}/duties`);

    if (!response.ok) {
        throw new Error("Unexpected error getting duty list.");
    }

    return response.json();
};

export const createDuty = async (data: CreateDutyInput): Promise<Duty> => {
    const response = await fetch(
        `${API_URL}/duties`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );

    if (!response.ok) {
        throw new Error("Unexpected error getting duty list.");
    }

    return response.json();
};
