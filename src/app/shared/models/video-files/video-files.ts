export class VideoFiles {

  id: number;
  quality: string;
  file_type: string;
  width: number;
  height: number;
  fps: number;
  link: string;

  constructor(
    id: number,
    quality: string,
    file_type: string,
    width: number,
    height: number,
    fps: number,
    link: string
  ) {
    this.id = id;
    this.quality = quality;
    this.file_type = file_type;
    this.width = width;
    this.height = height;
    this.fps = fps;
    this.link = link;
  }
}
