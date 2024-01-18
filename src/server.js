require('dotenv').config();

const Hapi = require("@hapi/hapi");
const songs = require("./api/songs");
const SongsService = require('./services/postgres/SongsService');
const SongsValidator = require('./validator/songs');
const ClientError = require("./exceptions/ClientError");

const init = async () => {
  const songsService = new SongsService();
  const albumsService = new AlbumService(); 
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  console.log(process.env.PORT);
 
  await server.register({
    plugin: songs,
    options: {
      service: songsService,
      validator: SongsValidator,
    },
  });

  await server.register({
    plugin: albums,
    options: {
      service: albumsService,
      validator: AlbumValidator,
    },
  });


  // server.ext('onPreResponse', (request, h) => {
  //   // mendapatkan konteks response dari request
  //   const { response } = request;
  
  //   // penanganan client error secara internal.
  //   if (response instanceof ClientError) {
  //     const newResponse = h.response({
  //       status: 'fail',
  //       message: response.message,
  //     });
  //     newResponse.code(response.statusCode);
  //     return newResponse;
  //   }
      
  //   return h.continue;
  // });

 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();
