import { AssignedArtist } from "./artist";

export class Ent {
    id: number;
    title: string; // Huvudsaklig, engelsk titel. Om engelsk titel inte finns, originaltitel på originalspråk.
    originalTitle: string; // "Spirited Away" blir "千と千尋の神隠し" eller "Sen to Chihiro no Kamikakushi"
    otherTitles: { title: string, langId: number } | null;
    handle: string; // Unik sträng som används i URL:en
    date: string; // YYYY-MM-DD
    media: { 
        poster: string, // URL
        otherPosters?: string[],
        background: string,
        otherBackgrounds?: string[]
    }
    entType: { isSub: boolean, id: number } // Om sub == true så kommer id:t att jämföras med subEntTypes istället för entTypes
    credits: AssignedArtist[];

    constructor(
        id: number, 
        title: string, 
        originalTitle: string, 
        otherTitles: { title: string, langId: number } | null,
        handle: string,
        date: string,
        media: { 
            poster: string,
            otherPosters?: string[],
            background: string,
            otherBackgrounds?: string[]
        },
        entType: { isSub: boolean, id: number },
        credits: AssignedArtist[]
    ) {
        this.id = id;
        this.title = title;
        this.originalTitle = originalTitle;
        this.otherTitles = otherTitles;
        this.handle = handle;
        this.date = date;
        this.media = media;
        this.entType = entType;
        this.credits = credits;
    }
}

export class Film extends Ent {
    length: number; // I minuter

    constructor(
        id: number, 
        title: string, 
        originalTitle: string, 
        otherTitles: { title: string, langId: number } | null,
        urlLabel: string,
        date: string,
        media: { 
            poster: string,
            otherPosters?: string[],
            background: string,
            otherBackgrounds?: string[]
        },
        entType: { isSub: boolean, id: number },
        credits: AssignedArtist[],
        length: number
    ) {
        super(id, title, originalTitle, otherTitles, urlLabel, date, media, entType, credits);
        this.length = length;
    }
}

export interface EntType { id: number, name: string, otherNames?: string[] }
export const entTypes: EntType[] = [
    { id: 1, name: "Film/Films/films", otherNames: ["Movie/Movies/movies"] },
    { id: 2, name: "Series/Series/series", otherNames: ["Show/Shows/shows", "TV-Show/TV-Shows/tv-shows", "TV/TV/tv"] },
    { id: 3, name: "Game/Games/games", otherNames: ["Video-Game/Video-Games/video-games"]},
    { id: 4, name: "Photo/Photos/photos", otherNames: ["Photograph/Photographs/photographs", "Picture/Pictures/pictures", "Image/Images/images"] },
    { id: 5, name: "Painting/Paintings/paintings" },
    { id: 6, name: "Literature/Literature/literature" },
    { id: 7, name: "Music/Music/music" },
]; // Singular/Plural/url-handle

export interface SubEntType { id: number, name: string, otherNames?: string[], parentId: number }

export const subEntTypes: SubEntType[] = [
    { id: 1, name: "Short Film/Short Films/short-films", parentId: 1 },
];

export interface AssignedEntType { isSub: boolean, id: number }