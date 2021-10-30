const url = "https://MYCOMPANY.zendesk.com/hc/en-us/requests/new?ticket_form_id="
const optionsToRemove = ["FORM-ID", "FORM-ID-2"];

// generic function to hide the dropdown if only one option
function hideFormDropdown() {
    $(".request_ticket_form_id").hide();
}

// keep checking the dropdown exists every 100ms until it does
let checkExist = setInterval(function () {
    if ($("a.nesty-input").length) {
        clearInterval(checkExist);
        // if were on a ticket form directly hide the dropdown
        if (!window.location.toString().indexOf(url)) {
            hideFormDropdown()
        } else {
            $("a.nesty-input").each(function () {
                // get the all the possible form options (for everyone not just this user)
                const options = document
                    .getElementById("request_issue_type_select")
                    .getElementsByTagName("option");
                // loop over the options backwards (so as not to affect the list),
                // removing the options the user shouldn't be able to see
                for (var i = options.length - 1; i > 0; i--) {
                    let value = options[i].value;
                    // if the user cannot see the form store it in a list of ids
                    // the user cannot see and remove that option
                    if (optionsToRemove.indexOf(value) > -1) {
                        $(`option[value='${value}']`).each(function () {
                            $(this).remove();
                        });
                    }
                }
                // every time the user clicks a weird popup happens with a list of options,
                // this needs removing down to only those the user can see each time they click,
                // so use the stored list of options to remove loop over these
                // removing each one
                $(this).bind("click", function () {
                    optionsToRemove.forEach(function (id) {
                        $((`#${id}`)).remove();
                    });
                });
            })
        }
    }
}, 100);
