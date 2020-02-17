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
    var subMenu = Array.from(currentButton.children);
    
    $(currentButton).removeClass('button-selected');
    $(button).addClass('button-selected');

    loadPage(getPage());
}

//initialize buttons, add button click function
const button_init = (button, index) =>
{
    button.addEventListener('click', function() {selectButton(buttons[index]);});
}
buttons.forEach(button_init);