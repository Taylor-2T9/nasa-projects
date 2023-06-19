export interface MediaRenderer {
    media_type: 'image' | 'video' | string
    url: string
    title: string
}