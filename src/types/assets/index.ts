export type CameraTypes = Record<string, ICameraInfo>

interface ICameraInfo {
    name: string,
    full_name: string,
    default_sol: {
        curiosity?: number
        opportunity?: number
        spirit?: number
        perseverance?: number
    }
}