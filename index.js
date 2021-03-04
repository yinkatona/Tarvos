function display_time(){

    var d = new Date();
    var h = d.getHours(); // Extract hours
    var m = d.getMinutes(); // Extract minutes
    var ampm = (h >= 12)?"PM":"AM" // Convert to 12 hr format


    if (h > 12) h -= 12; // Next 4 lines; convert time to 12hr format
    if (h==0) h = 12; 
    if (m < 10) m = "0" + m;
    var t = h + ':' + m + ' ' + ampm;
    window.status = t;

    // Repeat function every minute
    setTimeout('display_time()', 60000);                         
}