"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    constructor(id, name, channel, seasons, descripcion, link, image) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.descripcion = descripcion;
        this.link = link;
        this.image = image;
    }
}
exports.Serie = Serie;