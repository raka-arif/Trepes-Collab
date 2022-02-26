function DISTANCE() {
    function toRadians (angle) {
        return angle * (Math.PI / 180);
    }   
    var velocity = document.getElementById('velocity').value;
    var degree = document.getElementById('degree').value;
    var distance = velocity**2 * Math.sin(toRadians(2 * degree))/(2 * 9.81);
    var distanceA = (distance.toFixed(2));

    document.getElementById("result").innerHTML="Your distance is " + distanceA;
}

function DEGREE() {
    function toRadians (angle) {
        return angle * (Math.PI / 180);
    }   
    var velocity = document.getElementById('velocity').value;
    var distance = document.getElementById('distance').value;
    var degree = Math.asin(((distance*2*9.81)/velocity**2)/2);
    var degreeA = (degree.toFixed(2));

    document.getElementById("result").innerHTML="Your degree is " + degreeA;
}