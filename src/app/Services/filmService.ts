import { FilmInput, FilmOutput } from "../Models/filmModels";
import * as repository from "../Repository/filmRepository";

export const getAll = async (): Promise<FilmOutput[]> => {
   return await repository.getAll();
};

export const getById = async (id: number): Promise<FilmOutput> => {
   return await repository.getById(id);
};

export const create = async (payload: FilmInput): Promise<FilmOutput> => {
   return repository.create(payload);
};

export const updateById = async (id: number, payload: FilmInput): Promise<FilmOutput> => {
   return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
   await repository.deleteById(id);
}
