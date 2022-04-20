type TTodoPotency = 1 | 2 | 3 | 4 | 5;

export interface ITodo {
    completed: boolean;
    title: string;
    additional: string;
    time: number;
    potency: TTodoPotency;
    id: number;
}