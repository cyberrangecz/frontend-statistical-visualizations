import { Level } from './level';

export class Participant {
    userRefId: number;
    userName: string;
    levels: Level[];
    instanceId: number;
    totalDuration?: number;
    totalScore?: number;
    hintsTaken?: number;
}
