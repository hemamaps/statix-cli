#!/usr/bin/env node

var program =  require('commander');
var statixConfig = require(process.cwd() + '/statix.config.js');
var Statix = require(process.cwd() + '/node_modules/statix').Statix;

var throwNoCommandNotice = true;
program
    .version('0.0.1')

program
    .command('server')
    .action(function() {
        throwNoCommandNotice = false;
        var statix = new Statix(statixConfig).server();
    });

program
    .command('build')
    .action(function() {
        throwNoCommandNotice = false;
        statixConfig.useFileWatch = false;
        var statix = new Statix(statixConfig).build();
    });

program.parse(process.argv);

if (throwNoCommandNotice === true) {
    console.log("Please provided a command server, or build")
}

