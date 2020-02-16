const container     = document.querySelector('.banner-left');
const buttons       = Array.from(container.children);
const displayPort   = document.querySelector('.pagePort');

var currentButton;

//get the button with class .button-selected
var getCurrentSelection = () => 
{
    return container.querySelector('.button-selected');
}

var getPage = () =>
{
   
    return $(getCurrentSelection()).attr('value');
}

const loadPage = (page) => 
{
    $(displayPort).attr('src', page);
}

//Take input from button
const selectButton = (button) =>
{
        //find the current button 
    currentButton = getCurrentSelection();

    $(currentButton).removeClass('button-selected');
    $(button).addClass('button-selected');

    //change iframe for customer navigation
    if ($(button).attr('id') != "login") 
    {
        //load page from button value
        loadPage(getPage());
    }
    else //go to staff login page
    {
        console.log("working");
        window.open(getPage(), '_blank');
    }
}

//initialize buttons, add button click function
const button_init = (button, index) =>
{
    button.addEventListener('click', function() {selectButton(buttons[index]);});
}
buttons.forEach(button_init);