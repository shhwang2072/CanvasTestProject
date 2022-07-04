CreateCanvas = function() {
    this.CreateCanvasElement = function(id) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        canvas.setAttribute('id', id)
    
        document.body.appendChild(canvas);
        return ctx;
    }
}

CreateCanvas.prototype = new CreateCanvas();
CreateCanvas.constructor = CreateCanvas;


