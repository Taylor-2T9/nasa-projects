export interface IMediaRenderer {
    media_type: 'image' | 'video' | string
    url: string
    title: string
}