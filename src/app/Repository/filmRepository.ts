import model, { FilmInput, FilmOutput } from "../Models/filmModels";

export const getAll = (): Promise<FilmOutput[]> => {
   return model.findAll();
};

export const getById = async (id: number): Promise<FilmOutput> => {
   const film = await model.findByPk(id);
   if (!film) {
      throw new Error("Registro nao encontrado!");
   }
   return film;
};

export const create = async (payload: FilmInput): Promise<FilmOutput> => {
   return await model.create(payload);
};

export const updateById = async (id: number, payload: FilmInput): Promise<FilmOutput> => {
   const film = await model.findByPk(id);
   if (!film) {
      throw new Error("Registro nao encontrado!");
   }
   return await film.update(payload);

   // return model.update(payload,{
   //    where: {film_id: id}
   // });
};

export const deleteById = async (id: number): Promise<void> => {
   const film = await model.findByPk(id);

   if (!film) {
      throw new Error("Registro nao encontrado!");
   }
   return await film.destroy();
}

