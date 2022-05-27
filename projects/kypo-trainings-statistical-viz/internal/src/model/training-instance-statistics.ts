import { Participant } from './participant';
import { LevelAnswers } from './level-answers';

export class TrainingInstanceStatistics {
  title: string;
  date: string;
  duration: number;
  instanceId: number;
  averageScore: number;
  medianScore: number;
  participants: Participant[];
  levelsAnswers: LevelAnswers[];
}
