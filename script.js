async function fetchData() {
    const res = await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
    const record = await res.json();
    no_records = 0;

    jQuery.each(record.data, function(index, item) {
        $("table tbody").append(
            '<tr>'+
            '<td>'+item.date+'</td>'+
            '<td>'+item.areaName+'</td>'+
            '<td>'+item.latestBy+'</td>'+
            '<td>'+item.deathNew+'</td>'+
            '</tr>'
        );

        if(index == 4)
            return false;
    });
}

$(document).ready(function(){
    fetchData();
});
