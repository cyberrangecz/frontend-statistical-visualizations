import { LevelAnswersDTO } from '../../DTOs/level-answers-dto';
import { LevelAnswers } from '@cyberrangecz-platform/statistical-visualizations/internal';

export class LevelAnswersMapper {
  static fromDTOs(dtos: LevelAnswersDTO[]): LevelAnswers[] {
    return dtos.map((dto) => LevelAnswersMapper.fromDTO(dto));
  }

  static fromDTO(dto: LevelAnswersDTO): LevelAnswers {
    const answers = new LevelAnswers();
    answers.id = dto.level_id;
    answers.correctAnswerSubmitted = dto.correct_answers_submitted;
    answers.wrongAnswers = dto.wrong_answers;
    answers.correctAnswer = dto.correct_answer;
    return answers;
  }
}
