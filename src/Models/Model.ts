export interface NewsItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

export interface CarouselItem {
    id: number;
    image: string;
    name: string;
}

export interface logo {
    bullLogo: string;
    CustomerLogo: string;
}

export interface banner {
    id: number; 
    image: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    altText: string;
    isActive: boolean;
}
export interface img {
    contact: string;
    consEcp: string;
    hd76: string,
    sd76: string,
    av490: string, 
    conecpbg: string,
    country: string
}
export interface videos{
    id: number;
    thumbnail: string;
    youtubeId: string;
    ThumbNailUrl : string;
    isActive : boolean;
}

export interface news{
    id: number;
    title: string;
    date: string;
    excerpt: string;    
    imageUrl: string;
    isActive : boolean;
}

export interface stats{
    icon: string, // Replace with correct path
    number: string,
    label: string,
    isActive : boolean;
}

export interface icons{

}

export interface source{
    logo: logo;
    banner: banner[];
    img: img;
    videos: videos[];
    news: news[];
    stats: stats[];
    icons: icons
    
}







