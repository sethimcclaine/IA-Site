var dynamicBG = function(divClass, itemCount, color) {

    var canvas,
        ctx,
        circles = [],
        winWidth = $(window).width(),
        winHeight = $(window).height(),
        maxWidth = 3840,      //assumed larges screen we would encounter
        maxHeight = 2160;   //assumed larges screen we would encounter
    /**
     * Add Canvas to given div
     *
     * @author Seth M.
     */
    function buildCanvas() {
        //Remove existing bg canvas
        $('#dynamicBG').remove();

        //Add bg canvas
        $(divClass).prepend('<canvas id="dynamicBG" width="' + maxWidth + '" height="' + maxHeight + '" style="border:1px solid #000000;"></canvas>');
        $('canvas').css('position', 'fixed').css('opacity','0.5');
        //Set vars for new canvas
        canvas = document.getElementById("dynamicBG");
        ctx = canvas.getContext("2d");

        ctx.strokeStyle = color;
        ctx.fillStyle = color;
    }
    
    /**
     * Returns a random integer between min (included) and max (excluded)
     * Using Math.round() will give you a non-uniform distribution!
     *
     * @author developer.mozilla.org
     */
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    /**
     * Creata an array of circle objects
     *
     * @author Seth M.
     */
    function generateCircles(count) {
        var i,
            links,
            sibling;


        //Create a new array of circle 
        circles = [];
        for (i = 0; i < count; i++) {
            circles.push(new circle);
        }
        //add siblings to each circle in array, so we can draw lines to them
        for (i = 0; i < count; i++) {
            links = getRandomInt(1, 3);
            for (links; links > 0; links--) {
                sibling = getRandomInt(0, count); 
                circles[i].siblings.push(circles[sibling]);
            }
        }
        update();
    }

    /**
     * Create a circle on the canvas for each circle object
     *
     * @author Seth M.
     */
    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i= 0; i < circles.length; i++) {
            circles[i].update();
        }
    }

    function circle() {
        this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
            ctx.fill(); 
            for (var i = 0; i < this.siblings.length; i++) {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.siblings[i].x, this.siblings[i].y);
                ctx.stroke();
            }
        };
        this.update = function() {
            //if we are out of the screen x limits by 5 or more pix
            if (this.x > winWidth + 5 || this.x < 0 - 5) {
                this.xSpeed = this.xSpeed * -1;
            }
            //if we are out of the screen y limits by 5 or more pix
            if (this.y > winHeight + 5 || this.y < 0 -5) {
                this.ySpeed = this.ySpeed * -1;
            } 
            //update positions
            this.x += this.xSpeed;
            this.y += this.ySpeed;

            this.draw();
        };

        this.x= getRandomInt(0, winWidth + 10) - 5;
        this.xSpeed = getRandomInt(0, 6);
        this.y= getRandomInt(0, winHeight + 10) - 5;
        this.ySpeed = getRandomInt(0, 6);
        this.radius= getRandomInt(5,20);
        this.siblings = [];

        //randomize which direction they move
        if(getRandomInt(0, 2)) {
            this.xSpeed = this.xSpeed * -1;
        }
        if(getRandomInt(0, 2)) {
            this.ySpeed = this.ySpeed * -1;
        }
    }

    function init() {
        buildCanvas();
        generateCircles(itemCount);
    }

//Event Listeners
//*
    //$(window).scroll(function() {
    $(window).mousemove( function() {
        update();
    });
/*/
    setInterval(update, 50);
//*/

    $(window).resize( function(){
        console.log('resizing');
        winHeight = $(window).height();
        winWidth = $(window).width();
        update()
        generateCircles(itemCount);
    });
//INIT
    init();
}
