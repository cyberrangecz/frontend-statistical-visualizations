import { LevelDTO } from './level-dto';

export class ParticipantDTO {
    user_ref_id: number;
    user_name: string;
    levels: LevelDTO[];
}
