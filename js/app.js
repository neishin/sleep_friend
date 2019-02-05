$(function (){
    var body = $('body');

    function chooseWho () {
        var questionWhy = $('<p class="text">Z kim klikam?</p>');
        body.append(questionWhy);
        var divCointainer = $('<div class="container">');
        body.append(divCointainer);
        var michal = $('<button id="michal" class="person">Michał</button>')
        var hania = $('<button id="hania" class="person">Hania</button>')
        divCointainer.append(michal);
        divCointainer.append(hania);
        michal.on('click', function() {
            michalChoose();
        })
        hania.on('click', function() {
            haniaChoose();
        })
    }

    function michalChoose () {
        body.empty();
        var questionWhat = $('<p class="text">Wybierz opcję</p>');
        body.append(questionWhat);
        var divCointainer = $('<div class="person-container">');
        body.append(divCointainer);
        var randomPlush = $('<button id="random-plush">Losowanko</button>')
        var oneBig = $('<button id="one-big">Jedna duża maskotka</button>');
        var twoSmall = $('<button id="two-small">Dwie małe maskotki</button>');
        divCointainer.append(randomPlush);
        divCointainer.append(oneBig);
        divCointainer.append(twoSmall);
        randomPlush.on('click', function () {
            plushSelector("Michal");
        })
        oneBig.on('click', function () {
            onePlushMichal ();
        })
        twoSmall.on('click', function () {
            twoPlushMichal ();
        })
    }

    function plushSelector (name) {
        var random = Math.ceil(Math.random()*5);
        if (name==='Michal'){
            if (random===1) {
                onePlushMichal()
            } else {
                twoPlushMichal()
            }
        } else {
            if (random===1) {
                onePlushHania()
            } else {
                twoPlushHania()
            }
        }
    }

    function haniaChoose () {
        body.empty();
        var questionWhat = $('<p>Wybierz opcję</p>');
        body.append(questionWhat);
        var divCointainer = $('<div class="person-container">');
        body.append(divCointainer);
        var randomPlush = $('<button id="random-plush">Losowanko</button>')
        var oneBig = $('<button id="one-big">Jedna duża maskotka</button>');
        var twoSmall = $('<button id="two-small">Dwie małe maskotki</button>');
        divCointainer.append(randomPlush);
        divCointainer.append(oneBig);
        divCointainer.append(twoSmall);
        randomPlush.on('click', function () {
            plushSelector("Hania");
        })
        oneBig.on('click', function () {
            onePlushHania ();
        })
        twoSmall.on('click', function () {
            twoPlushHania ();
        })
    }



    function onePlushMichal () {
        body.empty();
        var bigBuddy = $('<p>Dziś śpi z tobą:</p>');
        body.append(bigBuddy);
        var plushArray = ['Henio', 'Zebra', 'Zbigniew'];
        randomPlush(plushArray);
        reload();
    }

    function twoPlushMichal () {
        body.empty();
        var bigBuddy = $('<p>Dziś śpi z tobą:</p>');
        body.append(bigBuddy);
        var plushArray = ['Pan Sowa', 'Pan Sowa', 'Snake', 'Pikaczu', 'Złotek', 'Seledynek', 'Hedwiga', 'Om Nom', 'Bubo', 'Oskar']
        randomTwoPlush(plushArray);
        reload();
    }

    function onePlushHania () {
        body.empty();
        var bigBuddy = $('<p>Dziś śpi z tobą:</p>');
        body.append(bigBuddy);
        var plushArray = ['Akita', 'Kapeć'];
        randomPlush(plushArray);
        reload();
    }

    function twoPlushHania () {
        body.empty();
        var bigBuddy = $('<p>Dziś śpi z tobą:</p>');
        body.append(bigBuddy);
        var plushArray = ['Poma', 'Poma', 'Fałszywy Poma', 'Pimpek', 'Picik', 'Grubas', 'Ping', 'Buka']
        randomTwoPlush(plushArray);
        reload();
    }

    function randomPlush (arr) {
        var randomizer = Math.ceil(Math.random()*arr.length);
        var result = arr[randomizer - 1];
        var chosen = $('<p>'+result+'</p>');
        body.append(chosen);
    }

     function randomTwoPlush (arr) {
        var randomizer = Math.ceil(Math.random()*arr.length);
        var result = arr[randomizer - 1];
        var chosen = $('<p>'+result+'</p>');
        body.append(chosen);
        var and = $('<p>oraz</p>');
        body.append(and);
        arr.splice(randomizer-1, 1);
        var randomizer2 = Math.ceil(Math.random()*arr.length);
        var result2 = arr[randomizer2 - 1];
        var chosen2 = $('<p>'+result2+'</p>');
        body.append(chosen2);
    }

    function reload () {
        var again = $('<button class="again">Jeszcze raz?</button>');
        body.append(again);
        again.on('click', function() {
            window.location.reload();
        })
    }

    chooseWho();



})
