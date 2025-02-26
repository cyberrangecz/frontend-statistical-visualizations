import { ParticipantDTO } from './participant-dto';
import { LevelAnswersDTO } from './level-answers-dto';

export class TrainingInstanceStatisticsDTO {
    title: string;
    date: string;
    duration: number;
    instance_id: number;
    average_score: number;
    median_score: number;
    participants: ParticipantDTO[];
    levels: LevelAnswersDTO[];
}
