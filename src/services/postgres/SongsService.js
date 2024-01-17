const { Pool } = require("pg");
const { nanoid } = require("nanoid");
const InvariantError = require("../../exceptions/InvariantError");
const { mapDBToModel } = require("../../utils");
const NotFoundError = require("../../exceptions/NotFoundError");

class SongsService {
  constructor() {
    this._pool = new Pool();
  }

  async addSong({ title, year, performer, genre, duration, }) {
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const query = {
      text: "INSERT INTO songs VALUES($1, $2, $3, $4, $5, $6) RETURNING id",
      values: [id, title, year, performer, genre, duration, createdAt, updatedAt],
    };

    const result = await this._pool.query(query);

    if (!result.rows[0].id) {
      throw new InvariantError("Song gagal ditambahkan");
    }

    return result.rows[0].id;
  }

  async getSongs() {
    const result = await this._pool.query("SELECT * FROM songs");
    return result.rows.map(mapDBToModel);
  }

  async getSongById(id) {
    const query = {
      text: "SELECT * FROM songs WHERE id = $1",
      values: [id],
    };
    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError("Song tidak ditemukan");
    }

    return result.rows.map(mapDBToModel)[0];
  }

  async editSongById(id, { title, year, genre, performer, duration, }) {
    const updatedAt = new Date().toISOString();
    const query = {
      text: "UPDATE songs SET title = $1, body = $2, tags = $3, updated_at = $4 WHERE id = $5 RETURNING id",
      values: [itle, year, performer, genre, duration, updatedAt, id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError("Gagal memperbarui song. Id tidak ditemukan");
    }
  }

  async deleteNoteById(id) {
    const query = {
      text: "DELETE FROM songs WHERE id = $1 RETURNING id",
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError("Song gagal dihapus. Id tidak ditemukan");
    }
  }


}

module.exports = SongsService;