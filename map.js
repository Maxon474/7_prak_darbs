
const map = L.map('map').setView([56.94897792924912, 24.107568287202007], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const pointOnMap = [56.94897792924912, 24.107568287202007];

L.marker(pointOnMap)
    .addTo(map)

map.setView(pointOnMap, 15);