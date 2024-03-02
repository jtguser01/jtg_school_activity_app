"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    mongodb: {
        url: "mongodb://localhost:27017",
        databaseName: "jtg_school_db",
        options: {
            useNewUrlParser: true, // removes a deprecation warning when connecting
            useUnifiedTopology: true, // removes a deprecating warning when connecting
        },
    },
    migrationsDir: "migrations",
    changelogCollectionName: "changelog",
    migrationFileExtension: ".js",
    useFileHash: true,
    moduleSystem: "commonjs",
};

module.exports = config;
