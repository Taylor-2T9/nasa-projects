interface Camera {
    name: string
    full_name: string
}

export interface RoverData {
    name: "Curiosity" | "Opportunity" | "Perseverance" | "Spirit"
    landing_date: Date
    launch_date: Date
    max_sol: number
    max_date: Date
    total_photos: number
    cameras: Camera[]
}