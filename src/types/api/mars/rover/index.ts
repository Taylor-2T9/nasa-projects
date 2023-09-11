export interface IRoverCamera {
    name: string
    full_name: string
    src?: string,
    earth_date?: string,
    rover_name?: string
}

export interface IRoverData {
    name: "Curiosity" | "Opportunity" | "Perseverance" | "Spirit" | string
    cameras: IRoverCamera[]
    landing_date: string
    launch_date: string
    max_sol: number
    max_date: string
    status: "active" | "complete" | string
    total_photos: number
}