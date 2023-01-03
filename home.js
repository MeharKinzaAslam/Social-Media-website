//Side Bar


const menuItems = document.querySelectorAll('.menu-item');


//Messages
const MesageNotifications = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const SearchMessage = document.querySelector('#message-search')


//theme

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');



//fontSize
const fontSizes = document.querySelectorAll('.choose-size span');

var root = document.querySelector(':root');

//color

const colorPalette = document.querySelectorAll('.choose-color span');

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


//remove active class from all menu items
const changeActiveItem = () => {

    menuItems.forEach(item => {

        item.classList.remove('active');
    })
}


menuItems.forEach(item => {

    item.addEventListener('click', () => {

        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        }

        else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notifications-count').style.display = 'none';
        }
    })
})

//Messages
//search Chat

const searchMessage = () => {

    const val = SearchMessage.value.toLowerCase();
    message.forEach(chat => {

        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {

            chat.style.display = "flex";

        }
        else {

            chat.style.display = "none";
        }
    })

}
SearchMessage.addEventListener('keyup', searchMessage);

//when we click on message the message box shadow appears and after 2 sec it disappear and also message count disappear

MesageNotifications.addEventListener('click', () => {

    messages.style.boxShadow = '0 0 1rem blue';
    MesageNotifications.querySelector('.notifications-count').style.display = 'none';
    setTimeout(() => {

        messages.style.boxShadow = 'none';

    }, 2000)
})




//theme Customization

//open Model

const openThemeModal = () => {

    themeModal.style.display = "grid";
}

theme.addEventListener('click', openThemeModal);

//close Modal

const closeThemeModal = (e) => {

    if (e.target.classList.contains("customize-theme")) {


        themeModal.style.display = "none";



    }

}

themeModal.addEventListener('click', closeThemeModal);




//fontsizes

//remove active class from spans or font size selectors

const removeSizeSelector = () => {

    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {


    size.addEventListener('click', () => {
        let fontSize;
        removeSizeSelector();
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = "10px";
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', ' 5.4rem');
        }
        else if (size.classList.contains('font-size-2')) {
            fontSize = "13px";
            root.style.setProperty('----sticky-top-left ', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }
        else if (size.classList.contains('font-size-3')) {
            fontSize = "16px";
            root.style.setProperty('----sticky-top-left ', '-2rem');
            root.style.setProperty('----sticky-top-right ', '-17rem');
        }

        else if (size.classList.contains('font-size-4')) {
            fontSize = "19px";
            root.style.setProperty('----sticky-top-left', ' -5rem');
            root.style.setProperty('----sticky-top-right ', '-25rem');
        }

        else if (size.classList.contains('font-size-5')) {
            fontSize = "22px";
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right ', '-35rem');
        }

        document.querySelector('html').style.fontSize = fontSize;
    })


});



//Primary Colors

const changeActiveColorClass = () =>{
    colorPalette.forEach(colorPicker=>{
        colorPicker.classList.remove('active');
    })
}
colorPalette.forEach(color =>{
    

    color.addEventListener('click',()=>{

        changeActiveColorClass();
        let primaryHue;
        if(color.classList.contains('color-1'))
        {
            primaryHue = 252;

        }
        else if(color.classList.contains('color-2'))
        {
            primaryHue =52;

        }
        else if(color.classList.contains('color-3'))
        {
            primaryHue =352;

        }
        else if(color.classList.contains('color-4'))
        {
            primaryHue =152;

        }
        else if(color.classList.contains('color-5'))
        {
            primaryHue =202;

        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue' , primaryHue);
    })
})




//theme Background

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//Chnage Background Color
const changeBg = () =>{
    root.style.setProperty('--light-color-lightness' , lightColorLightness);
    root.style.setProperty('--white-color-lightness' , whiteColorLightness);
    root.style.setProperty('--dark-color-lightness' , darkColorLightness);
    
}


Bg1.addEventListener('click' , ()=>{

   
    //add active class
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    
    //remove customized changes from local storage
    window.location.reload();

})
Bg2.addEventListener('click' , ()=>{

    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();

})


Bg3.addEventListener('click' , ()=>{

    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBg();

})

/*--------------------------Log Out---------------------------------------------------- */

function logout() {
    redirect: window.location.replace("./login.html");

}