const cameraTypes = {
    FHAZ: {
        name: "FHAZ",
        full_name: "Front Hazard Avoidance Camera",
        default_sol: {
            curiosity: 1700, // 1100 1200 1250 1300 1600
            opportunity: 1800,
            spirit: 120 // 100 150
        }
    },
    RHAZ: {
        name: "RHAZ",
        full_name: "Rear Hazard Avoidance Camera",
        default_sol: {
            curiosity: 1100, // 1750 1650
            opportunity: 1800,
            spirit: 120
        }
    },
    MAST: {
        name: "MAST",
        full_name: "Mast Camera",
        default_sol: {
            curiosity: 1000 // 900 950 1100 1200
        }
    },
    CHEMCAM: {
        name: "CHEMCAM",
        full_name: "Chemistry and Camera Complex",
        default_sol: {
            curiosity: 900, // 970 1000 1100
        }
    },
    MAHLI: {
        name: "MAHLI",
        full_name: "Mars Hand Lens Imager",
        default_sol: {
            curiosity: 2300, // 2000 2050
        }
    },
    MARDI: {
        name: "MARDI",
        full_name: "Mars Descent Imager",
        default_sol: {
            curiosity: 1500, // 1400 1100 3000
        }
    },
    NAVCAM: {
        name: "NAVCAM",
        full_name: "Navigation Camera",
        default_sol: {
            curiosity: 1500, // 400 550 900 970 1000 2000 3000 
            opportunity: 550, // 100 200 800 
            spirit: 200 // 100 150 250 350 550 1000 
        }
    },
    PANCAM: {
        name: "PANCAM",
        full_name: "Panoramic Camera",
        default_sol: {
            opportunity: 1700, // 2000 3500 4000
            spirit: 800 // 100 150 400 500 750 800 900 
        }
    },
    MINITES: {
        name: "MINITES",
        full_name: "Miniature Thermal Emission Spectrometer (Mini-TES)",
        default_sol: {
            opportunity: 3200, // 3250
            spirit: 750 // 600 700 
        }
    },
    EDL_RUCAM: {
        name: "EDL_RUCAM",
        full_name: "Rover Up-Look Camera"
    },
    EDL_DDCAM: {
        name: "EDL_DDCAM",
        full_name: "Descent Stage Down-Look Camera"
    },
    EDL_PUCAM1: {
        name: "EDL_PUCAM1",
        full_name: "Parachute Up-Look Camera A"
    },
    EDL_PUCAM2: {
        name: "EDL_PUCAM2",
        full_name: "Parachute Up-Look Camera B"
    },
    NAVCAM_LEFT: {
        name: "NAVCAM_LEFT",
        full_name: "Navigation Camera - Left"
    },
    NAVCAM_RIGHT: {
        name: "NAVCAM_RIGHT",
        full_name: "Navigation Camera - Right"
    },
    MCZ_RIGHT: {
        name: "MCZ_RIGHT",
        full_name: "Mast Camera Zoom - Right"
    },
    MCZ_LEFT: {
        name: "MCZ_LEFT",
        full_name: "Mast Camera Zoom - Left"
    },
    FRONT_HAZCAM_LEFT_A: {
        name: "FRONT_HAZCAM_LEFT_A",
        full_name: "Front Hazard Avoidance Camera - Left"
    },
    FRONT_HAZCAM_RIGHT_A: {
        name: "FRONT_HAZCAM_RIGHT_A",
        full_name: "Front Hazard Avoidance Camera - Right"
    },
    REAR_HAZCAM_LEFT: {
        name: "REAR_HAZCAM_LEFT",
        full_name: "Rear Hazard Avoidance Camera - Left"
    },
    REAR_HAZCAM_RIGHT: {
        name: "REAR_HAZCAM_RIGHT",
        full_name: "Rear Hazard Avoidance Camera - Right"
    },
    EDL_RDCAM: {
        name: "EDL_RDCAM",
        full_name: "Rover Down-Look Camera"
    },
    SKYCAM: {
        name: "SKYCAM",
        full_name: "MEDA Skycam"
    },
    SHERLOC_WATSON: {
        name: "SHERLOC_WATSON",
        full_name: "SHERLOC WATSON Camera"
    },
    SUPERCAM_RMI: {
        name: "SUPERCAM_RMI",
        full_name: "SuperCam Remote Micro Imager"
    },
    LCAM: {
        name: "LCAM",
        full_name: "Lander Vision System Camera"
    }
}

export default cameraTypes