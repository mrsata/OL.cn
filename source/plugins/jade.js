"use strict";

var _ = require('underscore');
var jade = require('jade');
var path = require('path');
var fs = require('fs');

function init (templates) {
  return function (context, files) {
    let jadeFiles = files.filter(file => file.basename.slice(-5) == '.jade');

    jadeFiles.forEach(jadeFile => {
      let content = jade.renderFile(jadeFile.srcPath, context);

      let filename = jadeFile.basename;
      let name = filename.slice(0, -path.extname(filename).length);

      if (!templates.hasOwnProperty(name))
        return jadeFile.writeTextFile(content, '.html');

      let data = templates[name].render(_.extend({}, context, { content: content }));
      jadeFile.writeTextFile(data, '.html');
    });

    return context;
  }
}

module.exports = init;
