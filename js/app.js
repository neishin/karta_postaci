$(document).ready(function () {

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
