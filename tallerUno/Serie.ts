
export class Serie {
    public id: number;
    public name: string;
    public channel: string;
    public seasons: number;
    public descripcion: string;
    public link: string;
    public image: string;
    constructor(id: number,name: string, channel: string, seasons: number,descripcion: string,link: string, image: string, ) {
        this.id = id;
        this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.descripcion = descripcion;
      this.link = link;
      
      this.image = image;
    }
  }