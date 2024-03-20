export type Training = {
    _id?: string,
    name: string,
    date: string | number,
    isImplementation: boolean,
    userId?: string,
    parameters?: TrainingParameters,
    exercises: Excercise[]
}

export type Excercise = {
    _id?: string,
    name: string,
    replays: number,
    weight: number,
    approaches: number,
    isImplementation: boolean
}

export type TrainingParameters = {
    repeat: false,
    period: number,
    jointTraining: false,
    participants: []
}



export type TrainingList = {
    label: string,
    value: string
}



export type DataTraining = {
    name: string,
    approaches: number,
    weight: number,
    replays: number,
    isImplementation: boolean,
}



export type TrainingTypeData = {
    type: string,
    date: string,
    excercises: DataTraining[],
    isImplementation?: boolean,
}