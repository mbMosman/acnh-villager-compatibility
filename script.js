let selectedVillagers = [];

const HTML_BUTTON_ADD = '<button class="btn-add-villager">Add</button>';
const HTML_BUTTON_REMOVE = '<button class="btn-remove-villager">Remove</button>';

const BEST = 5;
const BETTER = 3;
const OK = 2;
const POOR = 1;
const BAD = 0;

const BAD_COMPATIBILITY = 'Incompatible';
const AVERAGE_COMPATIBILITY = 'Normal';
const GOOD_COMPATIBILITY = 'Friendly';

const MONTH_NUMBERS = {
    January: '1',
    February: '2',
    March: '3',
    April: '4', 
    May: '5',
    June: '6',
    July: '7',
    August: '8',
    September: '9',
    October: '10',
    November: '11',
    December: '12'
};

const PERSONALITY_MATRIX_INDEX = {
    'Normal':0,
    'Lazy':1,
    'Peppy':2,
    'Jock':3,
    'Snooty':4,
    'Cranky':5,
    'Smug':6,
    'Big sister':7
};
const PERSONALITY_MATRIX = [
    [OK,POOR,POOR,BETTER,BEST,OK,BEST,BETTER],
    [POOR,BEST,BETTER,POOR,OK,BETTER,OK,BEST],
    [POOR,BETTER,BEST,BEST,BETTER,POOR,OK,OK],
    [BETTER,POOR,BEST,BEST,POOR,OK,BETTER,OK],
    [BEST,OK,BETTER,POOR,OK,BEST,BETTER,POOR],
    [OK,BETTER,POOR,OK,BEST,BEST,POOR,BETTER],
    [BEST,OK,OK,BETTER,BETTER,POOR,BEST,POOR],
    [BETTER,BEST,OK,OK,POOR,BETTER,POOR,BEST]];

const SPECIES_BEST_AFFINITIES = [
    ['Bull', 'Cow'], ['Bear', 'Bear cub'], ['Cat', 'Tiger'],
    ['Dog', 'Wolf'], ['Goat', 'Sheep'], ['Kangaroo', 'Koala']
];

const SPECIES_BETTER_AFFINITIES = [
    ['Deer', 'Horse'], 
    ['Hamster', 'Squirrel', 'Mouse'] 
];

const SPECIES_POOR_AFFINITIES = [
    ['Cat', 'Mouse', 'Hamster'], ['Dog', 'Gorilla', 'Monkey'], ['Sheep', 'Wolf']
];

const FIRE_SIGNS = ['Aries', 'Leo', 'Sagittarius'];
const EARTH_SIGNS = ['Taurus', 'Virgo', 'Capricorn'];
const AIR_SIGNS = ['Gemini', 'Libra', 'Aquarius'];
const WATER_SIGNS = ['Cancer','Scorpio','Pisces'];


$(onReady);

function onReady() {
    $('#btn-search').on('click', function(event){
        event.preventDefault();
        search()
    });
    $('#btn-search-clear').on('click', function(event){
        $('#in-search').val('');
        $('#div-search-results').empty();
    });
    $('#div-search-results').on('click', '.btn-add-villager', addToCompatibility);
    $('#div-selected').on('click', '.btn-remove-villager', removeFromCompatibility);
}

function search() {
    let name = $('#in-search').val();
    $('#in-search').val('');
    console.log('Name to search:', name);
    let results = filterByName(name);
    console.log("Results:", results);
    displaySearchResults(results);
}

function filterByName(name) {
    let results = [];
    for (let item of acnhData){
        if (item.name.toLowerCase().includes(name.toLowerCase())) {
            results.push(item);
        }
    }
    return results;
}

function displaySearchResults(results) {
    $('#div-search-results').empty();
    for (item of results){
        let villagerDiv = $(`
            <div class="div-villager" id="div-${item.id}">
                <h3 class="text-center">${item.name}</h3>
                <img class="img-villager" src="${item.image_url}" alt="Image of ${item.name}" />
                <div class="btn-div text-center">
                    ${HTML_BUTTON_ADD}
                </div>
            </div>
        `);
        $('#div-search-results').append(villagerDiv);
        villagerDiv.data('villager', item);
        console.log("Added data:", $(`#div-${item.id}`).data('villager'));
    }
}

function addToCompatibility(){
    let $thisButton = $(this);
    let $buttonDiv = $thisButton.closest('.btn-div');

    // Remove from results & swap buttons
    let $villagerDiv = $thisButton.closest('.div-villager');
    $villagerDiv.detach();
    $thisButton.remove();
    $buttonDiv.append(HTML_BUTTON_REMOVE);

    // Add to selected array & display if not already there
    let villager = $villagerDiv.data('villager');
    let index = selectedVillagers.findIndex( v => v.name === villager.name);
    if (index < 0){
        selectedVillagers.push(villager);
        selectedVillagers.sort( (v1, v2) => (v1.name > v2.name) ? 1 : -1);
        $('#div-selected').append($villagerDiv);
        // Handle display only if adding new
        showHideSelectedSearch();
        showHideSelectedSection();
        showHideCompatibilityMatrix();
    }
}

function removeFromCompatibility(){
    let $thisButton = $(this);

    // Get villager data
    let $villagerDiv = $thisButton.closest('.div-villager');
    let villager = $villagerDiv.data('villager');

    // Remove from selected section
    $thisButton.closest('.div-villager').remove();

    // Remove from selected array
    let index = selectedVillagers.findIndex( v => v.name === villager.name);
    selectedVillagers.splice(index, 1);

    // Handle display
    showHideSelectedSearch();
    showHideSelectedSection();
    showHideCompatibilityMatrix();
}

function showHideSelectedSearch() {
    if (selectedVillagers.length === 10){
        $('#form-search').addClass('invisible');
        $('#div-search-results').empty();
    } else if (selectedVillagers.length < 10) {
        $('#form-search').removeClass('invisible');
    }
}

function showHideSelectedSection() {
    if (selectedVillagers.length === 0){
        $('#div-selected').addClass('invisible');
    } else if (selectedVillagers.length === 1) {
        $('#div-selected').removeClass('invisible');
    }
}

function showHideCompatibilityMatrix() {
    if (selectedVillagers.length < 2){
        $('#tbl-matrix').addClass('invisible');
        $('#intro-text').removeClass('invisible');
        $('#summary-text').addClass('invisible');
    } else if (selectedVillagers.length === 2) {
        $('#tbl-matrix').removeClass('invisible');
        $('#intro-text').addClass('invisible');
        $('#summary-text').removeClass('invisible');
    }

    if (selectedVillagers.length >= 2) {
        setupMatrixTable();
    }
}

function setupMatrixTable() {
    let $tableHeader = $('#tbl-head-matrix');
    let $tableBody = $('#tbl-body-matrix');

    $tableHeader.empty();
    $tableBody.empty();

    let $headerRow = $('<tr><th class="text-center align-middle" scope="col">Name</th>');
    $tableHeader.append($headerRow);

    let friendlyCount = 0;
    let incompatibleCount = 0;
    for (let villager of selectedVillagers) {
        let birthdayMonthNumber = MONTH_NUMBERS[villager.birthday_month];
        $headerRow.append(`<th scope="col">
            <div class="text-center villager-header">
                ${villager.name}
                <div class="details">
                    <div>${villager.personality}, ${villager.species}</div>
                    <div>${getElementFromSign(villager.sign)}, 
                    ${villager.sign}(${birthdayMonthNumber}/${villager.birthday_day})</div>
                </div>
            </div>
        </th>`);

        // Setup the body row for this villager
        let $bodyRow = $(`<tr>
            <th scope="row">
                <div class="text-center villager-header">
                    ${villager.name}
                    <div class="details">
                        <div>${villager.personality}, ${villager.species}</div>
                        <div>${getElementFromSign(villager.sign)}, 
                        ${villager.sign}(${birthdayMonthNumber}/${villager.birthday_day})</div>
                    </div>
                </div>
            </th>
        </tr>`);
        for (let subVillager of selectedVillagers) {
            if (subVillager.name !== villager.name) {
                let score = getCompatibilityScore(villager, subVillager);
                let styleClass = 'normal-compatibility';
                if (score.display === GOOD_COMPATIBILITY) {
                    styleClass = 'good-compatibility';
                    friendlyCount += 1;
                } else if (score.display === BAD_COMPATIBILITY) {
                    styleClass = 'bad-compatibility';
                    incompatibleCount += 1;
                }
                $bodyRow.append(`
                    <td>
                        <div class="text-center score ${styleClass}">
                            <div>${score.display}</div>
                            <div>Total = ${score.total}</div>
                            <div>
                                <span>P:${score.personality}</span>
                                <span>E:${score.element}</span>
                                <span>S:${score.species}</span>
                            </div>
                        </div>
                    </td>`);
            } else {
                // no compatibility with yourself
                $bodyRow.append('<td class="text-center align-middle score self">---</td>');
            }
        }
        // Add the row for this villager
        $tableBody.append($bodyRow);
        $('#summary-text').text(`Overall there are ${friendlyCount} friendly pairs 
            and ${incompatibleCount} incompatible pairs.`);
    }
}

function getCompatibilityScore(villager1, villager2) {
    let score = {
        total: 0,
        element: 0,
        species: 0,
        personality: 0
    }

    score.element = getElementCompatibility(villager1.sign, villager2.sign);
    score.total += score.element;
    
    score.species = getSpeciesCompatibility(villager1.species, villager2.species);
    score.total += score.species;
    
    score.personality = getPersonalityCompatibility(villager1.personality, villager2.personality);
    score.total += score.personality;
    
    if ( (score.species === BEST && score.total >= 9) || 
         (score.species===BETTER && score.total >= 10) ||
         (score.species===OK && score.total >= 11) ) {
        score.display = GOOD_COMPATIBILITY;
    } else if ( score.total <= 3 ) {
        score.display = BAD_COMPATIBILITY;
    } else {
        score.display = AVERAGE_COMPATIBILITY;
    }

    console.log('Score:', score);
    return score;

    
}

function getElementCompatibility(sign1, sign2) {
    const FIRE_WATER = ['Fire', 'Water'];
    const EARTH_AIR = ['Earth', 'Air'];

    let element1 = getElementFromSign(sign1);
    let element2 = getElementFromSign(sign2);

    if (element1 === element2) {
        return BEST;
    } else if ((FIRE_WATER.includes(element1) &&  FIRE_WATER.includes(element2)) ||
            (EARTH_AIR.includes(element1) && EARTH_AIR.includes(element2))) {
        return POOR;
    }
    return BETTER;
}

function getElementFromSign(sign) {
    
    if (FIRE_SIGNS.includes(sign)){
        return 'Fire';
    } 
    if (EARTH_SIGNS.includes(sign)) {
        return 'Earth';
    }
    if (WATER_SIGNS.includes(sign)) {
        return 'Water';
    }
    if (AIR_SIGNS.includes(sign)) {
        return 'Air';
    }
    console.log('Error: Element unknow for sign=' + sign);
    return 'Unknown';
}

function getSpeciesCompatibility(species1 , species2) {
    if (species1 === species2) {
        return BETTER;
    }

    for (array of SPECIES_BEST_AFFINITIES) {
        if (array.includes(species1) && array.includes(species2)) {
            return BEST;
        }
    }

    for (array of SPECIES_BETTER_AFFINITIES) {
        if (array.includes(species1) && array.includes(species2)) {
            return BEST;
        }
    }

    // Must do this after BEST/BETTER
    for (array of SPECIES_POOR_AFFINITIES) {
        if (array.includes(species1) && array.includes(species2)) {
            return BAD;
        }
    }

    // Otherwise OK
    return OK;
}

function getPersonalityCompatibility(personality1, personality2) {
    let i = PERSONALITY_MATRIX_INDEX[personality1];
    let j = PERSONALITY_MATRIX_INDEX[personality2];
    return PERSONALITY_MATRIX[i][j];
}



        function match_villagers()
        {
            var name1 = document.getElementById('name1').value;
            var name2 = document.getElementById('name2').value;
            var a = getVillager(name1);
            var b = getVillager(name2);
            var r = getCompatibility(a,b);
            var cons = getConsensus(r);
            var scor = getScore(r);
            var result = scor +" "+ cons;
            document.getElementById('result1').value = result;
        }



function count(list,val)
{
    var occurences = 0;
    for (var i=0; i<list.length; i++)
    if (list[i] === val) occurences++;
    return occurences;
}

function getConsensus(r)
{
    if (count(r,BEST) > 1) return 'Good';
    if (count(r,BEST) == 1 && count(r,BETTER) > 0 
    && count(r,POOR) == 0) return 'Good';
    if (count(r,POOR) > 1) return 'Bad';
    return 'Average';
}

// range: ♥♥♥ 15 > ♦♦♦ 9 > ♣♣♣ 3 > ××× -6
scoring = { BEST: 5, BETTER: 3, OK: 1, POOR: -2 };

function getScore(r)
{
    s = 0;
    for (var i=0; i<r.length; i++)
        s += scoring[ r[i] ];
    return s;
}

function getVillager(name)
{
    for (i = 0; i < data.length; i++)
    if (data[i]['Name'].toLowerCase() === name.toLowerCase())
        return data[i];
    return null;
}

function findTop(a,rating)
{
    var l = [], min=-6, max=15;
    if (rating === 'Best') min = 8;
    if (rating === 'Worst') max = -1;
    if (rating === 'Average'){ min = 0; max = 7;}

    for (var i = 0; i < data.length; i++)
    if (data[i].Name != a.Name)
    {
        var r = getCompatibility(a,data[i]);
        var s = getScore(r);
        if(s >= min && s <= max)
            l.push(data[i].Name
            +": "+getConsensus(r)+" "+s);
    }
    l.sort(function(a,b)
    { return parseInt(b.substr(b.length-2))
            > parseInt(a.substr(a.length-2)) ? 1 
            : ((parseInt(a.substr(a.length-2))
                > parseInt(b.substr(b.length-2)))
                ? -1 : 0); });
    return l;
}


