import type NoteRepository from '@/domain/note.repository.interface';
import type Note from '@/domain/entities/Note';

/**
 * Note Service
 */
export default class NoteService {
  /**
   * Note repository
   */
  private readonly noteRepository: NoteRepository;

  /**
   * Note Service constructor
   *
   * @param noteRepository - Note repository instance
   */
  constructor(noteRepository: NoteRepository) {
    this.noteRepository = noteRepository;
  }

  /**
   * Get note
   *
   * @param id - Note id
   * @returns { Note | null } - Note data
   */
  public async getNoteById(id: number): Promise<Note | null> {
    return await this.noteRepository.getNoteById(id);
  }

  /**
   * Get note by hostname
   *
   * @param hostname - Custom hostname linked with a note
   * @returns { Note | null } - Note data
   */
  public async getNoteByHostname(hostname: string): Promise<Note | null> {
    return await this.noteRepository.getNoteByHostname(hostname);
  }
}
