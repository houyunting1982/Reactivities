export interface IProfileLight {
    displayName: string;
    bio: string;
}

export interface IProfile extends IProfileLight {
    username: string,
    image: string,
    photos: IPhoto[]
}

export interface IPhoto {
    id: string,
    url: string,
    isMain: boolean
}