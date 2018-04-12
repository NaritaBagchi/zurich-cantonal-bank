const jsonServer = require('json-server');
const formidable = require('formidable');
const fs = require('fs');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.post('/fileupload', function(req, res){
	const form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
      	const oldpath = files.filetoupload.path;
	    const newpath = 'C:/Narita/React/zurich-cantonal-bank/fileupload/' + files.filetoupload.name;
    	fs.rename(oldpath, newpath, function (err) {
        	if (err) throw err;
        	res.write('File uploaded and moved!');
        	res.end();
      	});
	});
});

server.use(middlewares);
server.use(router);

server.listen(port);