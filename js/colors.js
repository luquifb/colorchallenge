
function Color(name, hex){
    this.name = name;
    this.hex = hex;
}

function ColorOperation(color_a,color_b,operation,answer){
    this.a = color_a;
    this.b = color_b;
    this.op = operation;
    this.answer = answer;
}

function colorTable(){
    return [
        new ColorOperation(
            new Color("Green","#00FF00"),
            new Color("Blue",'#0000FF'),
            "+",
            new Color("Cian",'#00FFFF')
        ),
        new ColorOperation(
            new Color("Green","#00FF00"),
            new Color("Red",'#FF0000'),
            "+",
            new Color("Yellow",'#FFFF00')
        ),
        new ColorOperation(
            new Color("Yellow",'#FFFF00'),
            new Color("Red",'#FF0000'),
            "+",
            new Color("Orange",'#FF9900')
        ),        
        new ColorOperation(
            new Color("Red","#FF0000"),
            new Color("Blue",'#0000FF'),
            "+",
            new Color("Violet",'#00FFFF')
        ),   
        new ColorOperation(
            new Color("Violet","#FF00FF"),
            new Color("Blue",'#0000FF'),
            "-",
            new Color("Red",'#FF0000')
        ),
        new ColorOperation(
            new Color("Violet","#FF00FF"),
            new Color("Red",'#FF00FF'),
            "-",
            new Color("Blue",'#0000FF')
        ),        
        new ColorOperation(
            new Color("Yellow","#FFFF00"),
            new Color("Red",'#FF0000'),
            "-",
            new Color("Green",'#00FF00')
        ),
        new ColorOperation(
            new Color("Yellow","#FFFF00"),
            new Color("Green",'#00FF00'),
            "-",
            new Color("Red",'#FF0000')
        ),        
        new ColorOperation(
            new Color("Cian","#00FFFF"),
            new Color("Green",'#00FF00'),
            "-",
            new Color("Blue",'#0000FF')
        ),
        new ColorOperation(
            new Color("Cian","#00FFFF"),
            new Color("Blue",'#0000FF'),
            "-",
            new Color("Green",'#00FF00')
        ),                
    ]
}

function getColorQuestion(n){
    var correct = _.sample(colorTable());
    var answers = _.sampleSize(colorTable(),n-1).map(function(e){
        return e.answer;
    });
    answers.push(correct.answer);

    return { question: correct, answers: _.shuffle(answers)}
}

