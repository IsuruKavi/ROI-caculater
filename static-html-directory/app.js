$(document).ready(function () {
   
    


    $('#ROIForm').submit(function (event) {
        event.preventDefault(); // Prevent default form submission

        // Initialize an empty array to store the user-entered values
        var values = [];

        // Get the values entered by the user and push them into the array
        values.push($('#coi').val()); // Cost of Investment
        values.push($('#fvi').val()); // Final Value of Invesment
        values.push($('#ivi').val()); // Initial Value of Invesment

        // Get the values entered by the user for dynamic inputs (if any)
        $('.dynamic-input').each(function () {
            values.push($(this).val());
        });

       function calculateROI(values){
        let ROI_value=((parseInt(values[1])-parseInt(values[2]))/parseInt(values[0]))*100;
        return ROI_value;
       }
        // Output the array of user-entered values to the console
    
        
       
    
        $('#npv_value').text('ROI: ' + calculateROI(values)+' %');
    
    });

});


