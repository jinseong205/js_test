class Chart { 
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    drawLine(){
        console.log('draw line');
    }
}

class BarCharts extends Chart{
    constructor(width,height){
        super(width, height);
    }

    draw(){
        this.drawLine();
        console.log(`draw ${this.width} x ${this.height} barChart`)
    }
}

const barchar1 = new BarCharts(100, 100);
barchar1.draw();
