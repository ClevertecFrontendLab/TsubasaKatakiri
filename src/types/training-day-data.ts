import { DataTraining } from "./data-training"
import { TrainingList } from "./training-list"

export type TrainingDayData = {
    type: TrainingList,
    excercises: DataTraining[]
}