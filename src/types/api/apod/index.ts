export interface IPictureData {
    date: Date
    explanation: string
    media_type: "image" | "video" | string
    hdurl: string
    service_version: string
    title: string
    url: string
}