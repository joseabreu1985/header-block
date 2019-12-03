var LSX_BLOCKS = Object.create( null );
;( function( $, window, document, undefined ) {

    'use strict';

    LSX_BLOCKS.document = $(document);

    /**
     * On document ready.
     *
     * @package    lsx-blocks
     * @subpackage scripts
     */
    LSX_BLOCKS.document.ready( function() {
        LSX_BLOCKS.init();
    } );

} )( jQuery, window, document );
