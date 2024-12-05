import { AssignedEntType } from "./ent";

// För användning i Ent-instanser
export interface AssignedArtist { 
    id: number, 
    name: string, 
    roles: { roleId: string, for?: string | string[] }[]
}
// AI genererad
export interface Role { id: number, name: string, entType: AssignedEntType | AssignedEntType[]} // Anger entType eftersom (exempelvis) en film-producent och en musik-producent är två väldigt olika saker
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