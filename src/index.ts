import './style.scss';

console.log('Script Edit');

declare const module: any;

if ( module.hot ) {
    module.hot.accept();
    module.hot.dispose( function () {
        console.log( 'Script updated' );
    } );
}