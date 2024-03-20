export type Training = {
    _id?: string,
    name: string,
    date: number | string,
    isImplementation?: boolean,
    userId?: string,
    parameters?: TrainingParameters,
    exercises: Excercise[]
}

export type Excercise = {
    _id?: string,
    name: string,
    replays: number | undefined,
    weight: number | undefined,
    approaches: number | undefined,
    isImplementation: boolean
}

export type TrainingParameters = {
    repeat: false,
    period: number,
    jointTraining: false,
    participants: string[]
}



export type TrainingList = {
    label: string,
    value: string
}



export type DataTraining = {
    name: string,
    approaches: number | undefined,
    weight: number | undefined,
    replays: number | undefined,
    isImplementation: boolean,
}



export type TrainingTypeData = {
    type: string,
    date: string,
    excercises: DataTraining[],
    isImplementation?: boolean,
}



export type TrainingPutQuery = {
    id: string,
    body: Training
}