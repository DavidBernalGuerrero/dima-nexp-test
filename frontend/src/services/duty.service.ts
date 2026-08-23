import type { CreateDutyInput, Duty, UpdateDutyInput } from "../types/duty.types";

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
        throw new Error("Unexpected error creating a new duty entry.");
    }

    return response.json();
};

export const updateDuty = async (id: string, data: UpdateDutyInput): Promise<Duty> => {
    const response = await fetch(
        `${API_URL}/duties/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
    );

    if (!response.ok) {
        throw new Error(`Unexpected error deleting the duty ${id}.`);
    }

    return response.json();
};

export const deleteDuty = async (id: string): Promise<void> => {
    const response = await fetch(
        `${API_URL}/duties/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        }
    );

    if (!response.ok) {
        throw new Error(`Unexpected error deleting the duty ${id}.`);
    }
};
