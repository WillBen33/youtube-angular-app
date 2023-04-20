import { User } from "../user/user";
import { VideoFiles } from "../video-files/video-files";
import { VideoPictures } from "../video-pictures/video-pictures";

export class Video {
    id: number;
    width: number;
    height: number;
    url: string;
    image: string;
    full_res: null;
    tags: [];
    duration: number;
    user: User;
    video_files: VideoFiles[]; 
    video_pictures: VideoPictures[];

  constructor(
    id: number, 
    width: number, 
    height: number, 
    url: string, 
    image: string, 
    full_res: null, 
    tags: [], 
    duration: number, 
    user: User, 
    video_files: VideoFiles[], 
    video_pictures: VideoPictures[]
) {
    this.id = id;
    this.width = width;
    this.height = height;
    this.url = url;
    this.image = image;
    this.full_res = full_res;
    this.tags = tags;
    this.duration = duration;
    this.user = user;
    this.video_files = video_files;
    this.video_pictures = video_pictures;
  }
}
