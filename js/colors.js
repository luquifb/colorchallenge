
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
            "adding (+)",
            new Color("Cian",'#00FFFF')
        ),
        new ColorOperation(
            new Color("Green","#00FF00"),
            new Color("Red",'#FF0000'),
            "adding (+)",
            new Color("Yellow",'#FFFF00')
        ),
        new ColorOperation(
            new Color("Yellow",'#FFFF00'),
            new Color("Red",'#FF0000'),
            "adding (+)",
            new Color("Orange",'#FF9900')
        ),        
        new ColorOperation(
            new Color("Red","#FF0000"),
            new Color("Blue",'#0000FF'),
            "adding (+)",
            new Color("Violet",'#00FFFF')
        ),   
        new ColorOperation(
            new Color("Violet","#FF00FF"),
            new Color("Blue",'#0000FF'),
            "subtracting (-)",
            new Color("Red",'#FF0000')
        ),
        new ColorOperation(
            new Color("Violet","#FF00FF"),
            new Color("Red",'#FF00FF'),
            "subtracting (-)",
            new Color("Blue",'#0000FF')
        ),        
        new ColorOperation(
            new Color("Yellow","#FFFF00"),
            new Color("Red",'#FF0000'),
            "subtracting (-)",
            new Color("Green",'#00FF00')
        ),
        new ColorOperation(
            new Color("Yellow","#FFFF00"),
            new Color("Green",'#00FF00'),
            "subtracting (-)",
            new Color("Red",'#FF0000')
        ),        
        new ColorOperation(
            new Color("Cian","#00FFFF"),
            new Color("Green",'#00FF00'),
            "subtracting (-)",
            new Color("Blue",'#0000FF')
        ),
        new ColorOperation(
            new Color("Cian","#00FFFF"),
            new Color("Blue",'#0000FF'),
            "subtracting (-)",
            new Color("Green",'#00FF00')
        ), 
        new ColorOperation(
            new Color("Red",'#FF0000'),
            new Color("Orange",'#FF9900'),
            "adding (+)",
            new Color("Red-Orange",'#FF4500')
        ),  
        new ColorOperation(
            new Color("Yellow","#FFFF00"),
            new Color("Orange",'#FF9900'),
            "adding (+)",
            new Color("Orange-Yellow",'#FFCC00')
        ), 
        new ColorOperation(
            new Color("Yellow","#FFFF00"),
            new Color("Green",'#00FF00'),
            "adding (+)",
            new Color("Green-Yellow",'#ADFF2F')
        ),  
        new ColorOperation(
            new Color("Blue",'#0000FF'),
            new Color("Green",'#00FF00'),
            "adding (+)",
            new Color("Green-Blue",'#00FFFF')
        ), 
        new ColorOperation(
            new Color("Blue","#0000FF"),
            new Color("Violet","#FF00FF"),
            "adding (+)",
            new Color("Blue-Violet",'#8A2BE2')
        ), 
        new ColorOperation(
            new Color("Red",'#FF0000'),
            new Color("Violet","#FF00FF"),
            "adding (+)",
            new Color("Red-Violet","#C71585")
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

