var text_Hour = 9;
var text_Suffix = ":00 am";

var storedBlocks = [];

function generateHourBlock(iterations)
{
    if(!iterations)
    {
        iterations = 1;
    }

    for(var i = 0; i < iterations; i++)
    {
        var text_time = text_Hour + text_Suffix;

        $iBlock = $("<div>").addClass("row py-1");
    
        $iTimeText = $("<h5>").addClass("text-center").text(text_time);
        $iTimeDiv = $("<div>").addClass("col-2 py-3 bg-warning align-middle").append($iTimeText);
        
        $iTextDiv = $("<textarea>").addClass("col-8 py-3 bg-secondary overflow-auto").text("").attr("id", text_time);
    
        $iLockIcon = $("<span>").addClass("lock");
        $iLockDiv = $("<div>").addClass("col-1 py-3 lock-container border border-primary").append($iLockIcon);
        
        $iLockIcon.toggleClass('unlocked');
    
        $iBlock.append($iTimeDiv, $iTextDiv, $iLockDiv);
    
        $("#planner").append($iBlock);
    
        incrementTextHour();
    }

}

function incrementTextHour()
{
    if(text_Hour == 12)
    {
        text_Hour = 1;
        text_Suffix = ":00 pm";
    }
    else
    {
        text_Hour++;
    }
}

generateHourBlock(9);
DisplayDate("LLLL");

function DisplayDate(pFormat)
{
    var date = moment().format(pFormat);

    $("#current-date").text(date);
}

$( ".lock" ).click(function() {
    $(this).toggleClass('unlocked');

    $iTextArea = $($(this).parent().parent().children()[1]);

    iInput = $iTextArea.val();
    iID = $iTextArea.attr("id");

    iStoredBlock = {
        id : iID,
        input : iInput
    }

    for(var i = 0; i < storedBlocks.length; i++)
    {
        if(storedBlocks[i].id === iStoredBlock.id)
        {
            storedBlocks.splice(i, 1);

            return null;
        }
    }

    storedBlocks.push(iStoredBlock);

    console.log(storedBlocks);
    
  });