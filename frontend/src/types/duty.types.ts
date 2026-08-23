export interface Duty {
    id: string;
    name: string;
}

export interface CreateDutyInput {
    name: string;
}

export interface UpdateDutyInput {
    id: string;
    name: string;
}