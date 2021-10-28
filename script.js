function getDetails(){
    fetch('data.json')
    .then(res=> res.json())
    .then(res => res.data.forEach(element =>{
        var cases = element.infected;
        var lat = element.latitude;
        var long = element.longitude;
        var colour;
        // Set marker options.
        if(cases>500){
            colour = "red"
        }else if(cases>200 && cases<500){
            colour = "orange"
        }
        else{
            colour = "blue"
        }
       
    new mapboxgl.Marker({
    color: colour,
    draggable: false
}).setLngLat([long,lat])
    .addTo(map);

    }))
}
getDetails()