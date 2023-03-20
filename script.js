const loaderContainer = document.querySelector( '.loader-container' );
const loaderSpinnerDots = document.querySelector( '.spinner' ).querySelectorAll( 'span' );
const homePage = document.querySelector( 'main' );

// set starting ind for spinner animation loop
let ind = 0;

function spinnerAnimation ()
{

    // every spinner dot shows with 500 millisec delay
    setTimeout( () =>
    {
        loaderSpinnerDots[ ind ].classList.add( 'show' );

        if ( ind < 20 )
        {
            ind++;
            spinnerAnimation();
        }
    }, 500 );

}



// hide loading page with transition effect
const hideLoadingPage = () =>
{
    setTimeout( () =>
    {
        loaderContainer.classList.remove( 'show' );
        loaderSpinnerDots.forEach( dotItem => dotItem.classList.remove( 'show' ) );

        // set loader display to none after transition effect
        setTimeout( () =>
        {
            loaderContainer.classList.add( 'hide-loader' );
            homePage.classList.add( 'show' );

        }, 500);
        
        // show home page after spinner animation
        homePage.style.display='flex'

    }, 10500 );
};

// reset loader classes and show loader when openning page
const loadPage = () =>
{
    homePage.style.display='none'
    loaderContainer.classList.remove( 'hide-loader' );
    loaderContainer.classList.add('show');
    
    spinnerAnimation();
    hideLoadingPage();
    
};


document.addEventListener( 'DOMContentLoaded', loadPage );