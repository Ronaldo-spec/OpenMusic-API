const ClientError = require("../../exceptions/ClientError");

class SongsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    this.postSongHandler = this.postSongHandler.bind(this);
    this.getSongsHandler = this.getSongsHandler.bind(this);
    this.getSongByIdHandler = this.getSongByIdHandler.bind(this);
    this.putSongByIdHandler = this.putSongByIdHandler.bind(this);
    this.deleteSongByIdHandler = this.deleteSongByIdHandler.bind(this);
  }

  async postSongHandler(request, h) {
    this._validator.validateSongPayload(request.payload);
    const { title, year, genre, performer, duration, } = request.payload;

    const songId = await this._service.addSong({ title, year, genre, performer, duration, });

    const response = h.response({
      status: "success",
      message: "Song berhasil ditambahkan",
      data: {
        songId,
      },
    });
    response.code(201);
    return response;
  }

  async getSongsHandler() {
    const songs = await this._service.getSongs();
    return {
      status: "success",
      data: {
        songs,
      },
    };
  }

  async getSongByIdHandler(request, h) {
    const { id } = request.params;
    const note = await this._service.getSongById(id);
    return {
      status: "success",
      data: {
        song,
      },
    };
  }

  putSongByIdHandler(request, h) {
    this._validator.validateSongPayload(request.payload);
    const { id } = request.params;

    this._service.editSongById(id, request.payload);

    return {
      status: "success",
      message: "Song berhasil diperbarui",
    };
  }

  deleteSongByIdHandler(request, h) {
    const { id } = request.params;
    this._service.deleteSongById(id);

    return {
      status: "success",
      message: "Song berhasil dihapus",
    };
  }
}

module.exports = SongsHandler;
