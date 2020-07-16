const NodeMediaServer = require('node-media-server'),
    config = require('./config/default').rtmp_server,
    helpers = require('./helpers/helpers');

nms = new NodeMediaServer(config);
nms.on('prePublish', async (id, StreamPath, args) => {
    let stream_key = getStreamKeyFromStreamPath(StreamPath);
    console.log('[NodeEvent on prePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);

    // let session = nms.getSession(id);
    // session.reject();
    helpers.generateStreamThumbnail(stream_key);
});

const getStreamKeyFromStreamPath = (path) => {
    console.log(path)
    let parts = path.split('/');
    return parts[parts.length - 1];
};

module.exports = nms;
