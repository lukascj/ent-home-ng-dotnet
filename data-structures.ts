export class Ent {
    id: number;
    title: string; // Huvudsaklig, engelsk titel. Om engelsk titel inte finns, originaltitel på originalspråk.
    originalTitle: string; // "Spirited Away" blir "千と千尋の神隠し" eller "Sen to Chihiro no Kamikakushi"
    otherTitles: { title: string, langId: number } | null;
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
        super(id, title, originalTitle, otherTitles, date, media, entType, credits);
    }
}

interface EntType { id: number, name: string, otherNames?: string[] }
export const entTypes: EntType[] = [
    { id: 1, name: "Film/Films", otherNames: ["Movie/Movies"] },
    { id: 2, name: "Series/Series", otherNames: ["Show/Shows", "TV-Show/TV-Shows", "TV/TV"] },
    { id: 3, name: "Game/Games", otherNames: ["Video-Game/Video-Games"]},
    { id: 4, name: "Photo/Photos", otherNames: ["Photograph/Photographs", "Picture/Pictures", "Image/Images"] },
    { id: 5, name: "Painting/Paintings" },
    { id: 6, name: "Literature/Literature" },
    { id: 7, name: "Music/Music" },
]; // Singular/Plural
interface SubEntType { id: number, name: string, otherNames?: string[], parentId: number }
export const subEntTypes: SubEntType[] = [
    { id: 1, name: "Short Film/Short Films", parentId: 1 },
];
interface AssignedEntType { isSub: boolean, id: number }

// För användning i Ent-instanser
interface AssignedArtist { 
    id: number, 
    name: string, 
    roles: { roleId: string, for?: string | string[] }[]
}
// AI genererad
interface Role { id: number, name: string, entType: AssignedEntType | AssignedEntType[]} // Anger entType eftersom (exempelvis) en film-producent och en musik-producent är två väldigt olika saker
export const roles: Role[] = [
    { id: 1, name: "Actor", entType: { isSub: false, id: 1 } },
    { id: 2, name: "Director", entType: { isSub: false, id: 1 } },
    { id: 3, name: "Producer", entType: { isSub: false, id: 1 } },
    { id: 4, name: "Screenwriter", entType: { isSub: false, id: 1 } },
    { id: 5, name: "Cinematographer", entType: { isSub: false, id: 1 } },
    { id: 6, name: "Editor", entType: { isSub: false, id: 1 } },
    { id: 7, name: "Production Designer", entType: { isSub: false, id: 1 } },
    { id: 8, name: "Costume Designer", entType: { isSub: false, id: 1 } },
    { id: 9, name: "Makeup Artist", entType: { isSub: false, id: 1 } },
    { id: 10, name: "Sound Designer", entType: { isSub: false, id: 1 } },
    { id: 11, name: "Composer", entType: { isSub: false, id: 1 } },
    { id: 12, name: "Stunt Coordinator", entType: { isSub: false, id: 1 } },
    { id: 13, name: "Gaffer", entType: { isSub: false, id: 1 } },
    { id: 14, name: "Grip", entType: { isSub: false, id: 1 } },
    { id: 15, name: "Script Supervisor", entType: { isSub: false, id: 1 } }
] as const;

// AI genererad
interface Language { id: number, name: string, country: string | string[] }
export const languages: Language[] = [
    { id: 1, name: "English/English", country: ["United Kingdom", "United States"] },
    { id: 2, name: "Arabic/العربية", country: "Saudi Arabia" },
    { id: 3, name: "Bengali/বাংলা", country: "Bangladesh" },
    { id: 4, name: "Chinese/中文", country: "China" },
    { id: 5, name: "Croatian/Hrvatski", country: "Croatia" },
    { id: 6, name: "Czech/Čeština", country: "Czech Republic" },
    { id: 7, name: "Danish/Dansk", country: "Denmark" },
    { id: 8, name: "Dutch/Nederlands", country: "Netherlands" },
    { id: 9, name: "Finnish/Suomi", country: "Finland" },
    { id: 10, name: "French/Français", country: "France" },
    { id: 11, name: "German/Deutsch", country: "Germany" },
    { id: 12, name: "Greek/Ελληνικά", country: "Greece" },
    { id: 13, name: "Hebrew/עברית", country: "Israel" },
    { id: 14, name: "Hindi/हिन्दी", country: "India" },
    { id: 15, name: "Hungarian/Magyar", country: "Hungary" },
    { id: 16, name: "Italian/Italiano", country: "Italy" },
    { id: 17, name: "Japanese/日本語", country: "Japan" },
    { id: 18, name: "Korean/한국어", country: "South Korea" },
    { id: 19, name: "Malay/Melayu", country: "Malaysia" },
    { id: 20, name: "Norwegian/Norsk", country: "Norway" },
    { id: 21, name: "Persian/فارسی", country: "Iran" },
    { id: 22, name: "Polish/Polski", country: "Poland" },
    { id: 23, name: "Portuguese/Português", country: ["Portugal", "Brazil"] },
    { id: 24, name: "Romanian/Română", country: "Romania" },
    { id: 25, name: "Russian/Русский", country: "Russia" },
    { id: 26, name: "Serbian/Српски", country: "Serbia" },
    { id: 27, name: "Slovak/Slovenčina", country: "Slovakia" },
    { id: 28, name: "Spanish/Español", country: ["Spain", "Mexico", "Argentina"] },
    { id: 29, name: "Swahili/Kiswahili", country: "Tanzania" },
    { id: 30, name: "Swedish/Svenska", country: "Sweden" },
    { id: 31, name: "Telugu/తెలుగు", country: "India" },
    { id: 32, name: "Thai/ไทย", country: "Thailand" },
    { id: 33, name: "Turkish/Türkçe", country: "Turkey" },
    { id: 34, name: "Ukrainian/Українська", country: "Ukraine" },
    { id: 35, name: "Vietnamese/Tiếng Việt", country: "Vietnam" },
    { id: 36, name: "Zulu/isiZulu", country: "South Africa" }
] as const;
  