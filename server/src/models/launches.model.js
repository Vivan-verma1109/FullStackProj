const launches = new Map();


const launch = {
    flightNumber: 100,
    mission: "Kepler Explo",
    rocket: "Explorer",
    launchDate: new Date("December 27 2030"),
    destination: "Keppler-422 b" ,
    customers: ["NASA", "ZTM"],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch)

module.exports = {
    launches
}