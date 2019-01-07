$(document).ready(function () {
    // wybór rasy
//    function chooseRase() {
//       $('.stats').addClass('hidden');
//        var raceContainer = $('<div>', {class: 'race-container'});
//        $('body').append(raceContainer)
//        var dwarfButton = $('<button>', {class: 'race-button', id: 'dwarf'}).text('Krasnolud');
//        $('.race-container').append(dwarfButton);
////        var dwarfArrow = $('<button>', {class: 'race-arrow', id: 'dwarf-arrow'}).html('<i class="fas fa-caret-down"></i>');
////        $('.race-container').append(dwarfArrow);
//        var elfButton = $('<button>', {class: 'race-button', id: 'elf'}).text('Elf');
//        $('.race-container').append(elfButton);
//        var halflingButton = $('<button>', {class: 'race-button', id: 'halfling'}).text('Halfling');
//        $('.race-container').append(halflingButton);
//        var humanButton = $('<button>', {class: 'race-button', id: 'human'}).text('Człowiek');
//        $('.race-container').append(humanButton);
//        var dragonbornButton = $('<button>', {class: 'race-button', id: 'dragonborn'}).text('Smokowiec');
//        $('.race-container').append(dragonbornButton);
//        var gnomeButton = $('<button>', {class: 'race-button', id: 'gnome'}).text('Gnom');
//        $('.race-container').append(gnomeButton);
//        var halfelfButton = $('<button>', {class: 'race-button', id: 'halfelf'}).text('Pół-elf');
//        $('.race-container').append(halfelfButton);
//        var tieflingButton = $('<button>', {class: 'race-button', id: 'tiefling'}).text('Tiefling');
//        $('.race-container').append(tieflingButton)
//        $('#dwarf').on('click', function () {
//            $('#con').text('10');
//            $('#con-mod').text('0');
//            $('.stats').removeClass('hidden');
//            $('.race-container').addClass('hidden');
//        });
//        $('#elf').on('click', function () {
//            $('#dex').text('10');
//            $('#dex-mod').text('0');
//            $('.stats').removeClass('hidden');
//            $('.race-container').addClass('hidden');
//        });
//        $('#halfling').on('click', function () {
//            $('#dex').text('10');
//            $('#dex-mod').text('0');
//            $('.stats').removeClass('hidden');
//            $('.race-container').addClass('hidden');
//        });
//        $('#human').on('click', function () {
//            $('.main-stat').text('9');
//            $('.stats').removeClass('hidden');
//            $('.race-container').addClass('hidden');
//        });
//        $('#dragonborn').on('click', function () {
//            $('#str').text('10');
//            $('#str-mod').text('0');
//            $('#cha').text('9');
//            $('.stats').removeClass('hidden');
//            $('.race-container').addClass('hidden');
//        });
//        $('#gnome').on('click', function () {
//            $('#int').text('10');
//            $('#int-mod').text('0');
//            $('.stats').removeClass('hidden');
//            $('.race-container').addClass('hidden');
//        });
//        $('#tiefling').on('click', function () {
//            $('#int').text('9');
//            $('#cha').text('10');
//            $('#cha-mod').text('0');
//            $('.stats').removeClass('hidden');
//            $('.race-container').addClass('hidden');
//        })
//    }
//
//    chooseRase();

    // wybór klasy
    function chooseClass() {
        $('.stats').addClass('hidden');
        var classContainer = $('<div>', {class: 'class-container'});
        $('body').append(classContainer)
    }

    chooseClass();

    // funkcja zmniejszająca stat
    function minStat(stat, mod) {
        var currentStat = $(stat).text();
        var currentPool = $('#points-pool').text();
        var mod = $(mod);
        var statNumber = parseInt(currentStat);
        var poolNumber = parseInt(currentPool);
        if (statNumber == 8) {
            alert("nie można zejść poniżej 8")
        } else if (statNumber > 8 && statNumber < 14) {
            $(stat).text(statNumber -= 1);
            $('#points-pool').text(poolNumber += 1);
        } else {
            $(stat).text(statNumber -= 1);
            $('#points-pool').text(poolNumber += 2);
        }

        modState(statNumber, mod);
        acceptAllocation();
    }



    // funkcja zwiększająca stat
    function plusStat(stat, mod) {
        var currentStat = $(stat).text();
        var currentPool = $('#points-pool').text();
        var mod = $(mod);
        var statNumber = parseInt(currentStat);
        var poolNumber = parseInt(currentPool);
        if (currentPool <= 0) {
            alert('nie masz już punktów');
            return;
        }
        if (statNumber == 15) {
            alert('Nie można mieć wiecej niż 15')
        } else if (statNumber >= 13) {
            $(stat).text(statNumber += 1);
            $('#points-pool').text(poolNumber -= 2);
        } else {
            $(stat).text(statNumber += 1);
            $('#points-pool').text(poolNumber -= 1);
        }

        modState(statNumber, mod);
        acceptAllocation();
    }

    // funkcja wyliczająca modyfikator statu
    function modState(statNumber, mod) {
        if (statNumber == 8 || statNumber == 9) {
            mod.text('-1');
        } else if (statNumber == 10 || statNumber == 11) {
            mod.text('0');
        } else if (statNumber == 12 || statNumber == 13) {
            mod.text('+1');
        } else if (statNumber == 14 || statNumber == 15) {
            mod.text('+2');
        }
    }

    // funkcja uruchamiająca przycisk Akceptuj po rozdaniu punktów
    function acceptAllocation() {
        var currentPool = $('#points-pool').text();
        var poolNumber = parseInt(currentPool);
        if (poolNumber === 0) {
            $('#accept-button').removeClass('hidden')
        } else {
            $('#accept-button').addClass('hidden')
        }
        $('#accept-button').on('click', function () {
            $('.stat-button').addClass('hidden');
            $('#points-pool-container').css('display', 'none');
        })
    }

    // zminusowane Siły
    $('#min-str').on('click', function () {
        minStat('#str', '#str-mod')
    });

    // splusowanie siły
    $('#plus-str').on('click', function () {
        plusStat('#str', '#str-mod')
    })

    // zminusowanie Zręczności
    $('#min-dex').on('click', function () {
        minStat('#dex', '#dex-mod')
    });

    // splusowanie zrecznosci
    $('#plus-dex').on('click', function () {
        plusStat('#dex', '#dex-mod')
    })

    // zminusowanie wytrzymalosci
    $('#min-con').on('click', function () {
        minStat('#con', '#con-mod')
    });

    // splusowanie wytrzymalosci
    $('#plus-con').on('click', function () {
        plusStat('#con', '#con-mod')
    })

    // zminusowanie inta
    $('#min-int').on('click', function () {
        minStat('#int', '#int-mod')
    });

    // splusowanie inta
    $('#plus-int').on('click', function () {
        plusStat('#int', '#int-mod')
    })

    // zminusowanie wisdom
    $('#min-wis').on('click', function () {
        minStat('#wis', '#wis-mod')
    });

    // splusowanie wisdom
    $('#plus-wis').on('click', function () {
        plusStat('#wis', '#wis-mod')
    })

    // zminusowanie cha
    $('#min-cha').on('click', function () {
        minStat('#cha', '#cha-mod')
    });

    // splusowanie cha
    $('#plus-cha').on('click', function () {
        plusStat('#cha', '#cha-mod')
    })
})
