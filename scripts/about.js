const figureImg = document.querySelector( '.figure-img' );
const aboutContent = document.querySelector( '.about-content' );


const changeImg = ( e ) =>
{

    figureImg.src = `../images/aboutImg-${ e.type === 'mouseover' ? 1 : 2 }.png`;

};


figureImg.addEventListener( 'mouseover', changeImg );
figureImg.addEventListener( 'mouseleave', changeImg );

document.addEventListener( 'DOMContentLoaded', () =>
{
    aboutContent.classList.add( 'show' );
} );