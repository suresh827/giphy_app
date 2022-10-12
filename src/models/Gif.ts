interface Original {
  url: string;
}
interface Images {
  original: Original;
}
export default interface Gif {
  url: string;
  title: string;
  images: Images;
  id: string;
}
