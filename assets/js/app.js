$.contextMenu({
    selector: '.context-nav-bar',
    items: {
        addLink: {
            name: "Add Link",
            callback: function(key, opt){
                $('#addLinkModal').modal({
                    backdrop: false,
                    keyboard: false,
                });
            }
        },
        AddDropDownMenu: {
            name: "Add Menu",
            callback: function(key, opt){
                alert("Clicked on " + key);
            }
        },
    }
});

$.contextMenu({
    selector: '.navbar-links li',
    items: {
        delete: {
            name: "Delete",
            callback: function(key, opt){
                this.remove();
            }
        },
    }
});

dragula([document.querySelector('.navbar-links')]);


function addLink(){
    var $linkText = $('#addLinkModal input[name=link_text]');
    var $linkURL = $('#addLinkModal input[name=link_url]');
    var hasErrors = false;

    if(! $linkText.val()){
        hasErrors = true;
        $linkText.closest('.form-group').addClass('has-error')
            .append('<span class="help-block">Please enter link text</span>');
    }
    if(! $linkURL.val()){
        hasErrors = true;
        $linkURL.closest('.form-group').addClass('has-error')
            .append('<span class="help-block">Please enter link URL</span>');
    }
    if(hasErrors){
        return;
    }
    $('#addLinkModal').modal('hide');
    $('.navbar-links').append(
        `<li>
            <a href="${$linkURL.val()}">${$linkText.val()}</a>
        </li>`
    );
}

function clearErrors(input) {
    $(input).closest('.form-group').removeClass('has-error')
        .find('.help-block').remove();
}