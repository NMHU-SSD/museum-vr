/* global AFRAME */
AFRAME.registerComponent('page-turn', {
    schema: {direction: {default: 'forward', oneOf: ['forward', 'backward']}},
    init: function () {
        this.pieces = ['artwork1', 'artwork2', 'artwork3'];
        this.curPiece = 0;
        this.changePiece = this.changeArtwork.bind(this);
        this.el.addEventListener('click', this.changePiece);
    },

    changeArtwork: function () {
        //console.log("changeArtwork(" + this.data.direction + ")");
        // If we're moving to the next item, add 1 and MOD it by the number of pieces
        if (this.data.direction === 'forward') this.curPiece = (this.curPiece + 1) % this.pieces.length;
        // If we're moving to the previous item, add the number of pieces-1 and MOD it by the number of pieces
        else if (this.data.direction === 'backward') this.curPiece = (this.curPiece + this.pieces.length-1) % this.pieces.length;

        // Get the art container
        let artContainer = document.getElementById("artContainer");
        // set the current artwork
        artContainer.setAttribute("src", "#"+ this.pieces[this.curPiece]);
    } // changeArtwork()
});