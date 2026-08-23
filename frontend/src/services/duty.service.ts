import type { Duty } from "../types/duty.types";

const API_URL = import.meta.env.VITE_API_URL;

export const getDuties = async (): Promise<Duty[]> => {
    const response = await fetch(`${API_URL}/duties`);

    if (!response.ok) {
        throw new Error("Unexpected error getting duty list.");
    }

    return response.json();
};
