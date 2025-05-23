export interface ContactInfoItem {
  name: string;
  desc: string;
  imgUrl: string;
}

export interface ContactInfo {
  brieftitle: string;
  title: string;
  description: string;
  items: ContactInfoItem[];
}
