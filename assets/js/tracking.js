// custom tracking code triggers
$("#topJoinButton").click(function(e){
    e.preventDefault();
    track(e, "topJoinButton", "someValue2", "someOtherValue2");
    $(document).ajaxComplete(function(){
        window.location.replace(e.target.href);
    });
}); 

// standardized predefined function for DRY approach
var track = function(e, eventType, someElement, someKey, someOtherKey) {
    e.preventDefault();
    data = {
        "eventData" : {
            "eventType" : eventType,
            "data" : {
                "someElement" : someElement,
                "someKey" : someKey,
                "someOtherKey" : someOtherKey
            }
        }
    };
    $.ajax({
        type: "POST",
        url: "http://tracking.teamskeet.com/event.json?api_key=12345",
        data: data,
        success: function(){
            //$("#message").html('Success');
            alert("Tracking data sent succesfully!");
        },
        dataType: "json"
    });
}


// Goran's example function
/*
$("#topJoinButton").click(function(event){
    event.preventDefault();
    data = {
        "eventData" : {
            "eventType" : "click",
            "data" : {
                "someElement" : "topJoinButton",
                "someKey" : "someValue2",
                "someOtherKey" : "someOtherValue2"
            }
        }
    };
    $.ajax({
        type: "POST",
        url: "http://tracking.teamskeet.com/event.json?api_key=12345",
        data: data,
        success: function(){
            //$("#message").html('Success');
            alert("Tracking data sent succesfully!");
        },
        dataType: "json"
    });
});
*/