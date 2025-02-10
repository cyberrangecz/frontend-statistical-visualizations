import { ParticipantDTO } from '../../DTOs/participant-dto';
import { Participant } from '@cyberrangecz-platform/statistical-visualizations/internal';
import { LevelsMapper } from './levels-mapper';

export class ParticipantsMapper {
  static fromDTOs(dtos: ParticipantDTO[], instanceId: number): Participant[] {
    return dtos.map((dto) => this.fromDTO(dto, instanceId));
  }

  static fromDTO(dto: ParticipantDTO, instanceId: number): Participant {
    const participant = new Participant();
    participant.userRefId = dto.user_ref_id;
    participant.userName = dto.user_name;
    participant.levels = LevelsMapper.fromDTOs(dto.levels);
    participant.instanceId = instanceId;
    return participant;
  }
}
