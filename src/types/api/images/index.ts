export interface IImagesData {
    href: string
    items: IItemData[]
    links: ILinkData[]
}

export interface IItemData {
    center: string,
    data: {
        title: string,
        nasa_id: string,
        date_created: Date,
        keywords: string[],
        media_type: "image" | "video" | string,
        description_508: string,
        secondary_creator: string,
        description: string
    }
    links: ILinkData[]
}

export interface ILinkData {
    href: string,
    rel: string,
    render: string
}