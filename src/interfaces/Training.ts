export interface Training{
    name: string,
    date: Date,
    isImplementation?: boolean,
    parameters?: TrainingParameters,
    excercises: Excercise[]
}

export interface Excercise{
    name: string,
    replays: number,
    weight: number,
    approaches: number,
    isImplementation: boolean
}

export interface TrainingParameters{
    repeat: boolean,
    period: number,
    jointTraining: boolean,
    participants: string[]
}

export interface TrainingPutQuery{
    id: number,
    data: Training
}

export interface TrainingType{
    name: string,
    key: string
}