const launches = new Map();

let latest = 100;

const launch = {
    flightNumber: 100,
    mission: "Kepler Explo",
    rocket: "Explorer",
    launchDate: new Date("December 27 2030"),
    target: "Keppler-422 b" ,
    customers: ["NASA", "ZTM"],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch)

function getAllLaunches(){
    return Array.from(launches.values());
}

function addNewLaunch(){
    latest++
    launches.set(
        launch.flightNumber, 
        Object.assign(launch, {
        flightNumber: latest,
        customers: ["Vivan Verma", "NASA"],
        upcoming: true,
        success: true,
    }))
}

module.exports = {
    getAllLaunches,
    addNewLaunch
}