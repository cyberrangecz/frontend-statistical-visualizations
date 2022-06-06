import { LevelDTO } from '../../DTOs/level-dto';
import { Level } from '@muni-kypo-crp/statistical-visualizations/internal';

export class LevelsMapper {
  static fromDTOs(dtos: LevelDTO[]): Level[] {
    return dtos.map((dto) => LevelsMapper.fromDTO(dto));
  }

  static fromDTO(dto: LevelDTO): Level {
    const level = new Level();
    level.id = dto.level_id;
    level.title = dto.level_title;
    level.score = dto.score;
    level.duration = dto.duration;
    level.hintsTaken = dto.hints_taken;
    level.wrongAnswerSubmitted = dto.wrong_answers;
    return level;
  }
}
