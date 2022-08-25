function initMap() {
    const arroyito = {lat: -32.9140486, lng: -60.6744566};
    const junin = {lat: -34.5908336, lng: -60.955431}
    const nueveDeJulio = {lat: -35.4569806, lng: -60.8827386}

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: junin,
    });

    new google.maps.Marker({
        position: arroyito, map , title: "Estadio de mi equipo de fútbol!"});
    new google.maps.Marker({
        position: junin, map, title: "La ciudad donde nací y vivo actualmente!"});
    new google.maps.Marker({
        position: nueveDeJulio, map, title: "La ciudad donde viví hasta mis 28 años!"});
}