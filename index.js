
// Load Chance
var Chance = require('chance');
// Instantiate Chance so it can be used
var chance = new Chance();
var moment = require('moment');
/**
 * The sentence we will be manipulating
 * Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.
 */

(() => {
    // Use the same word list for all tests to make it fair
    let wordList = buildWordList();

    // Test 1
    let startTest1 = moment();
    for(let i = 0; i < 1000000; i++){
        sringTemplates(wordList);
    }
    let endTest1 = moment();
    let test1duration = moment.duration(endTest1.diff(startTest1));
    let test1Seconds = test1duration.asSeconds();

    // Test 2
    let startTest2 = moment();
    for(let i = 0; i < 1000000; i++){
        singleQuotesWithStringBuildup(wordList);
    }
    let endTest2 = moment();
    let test2duration = moment.duration(endTest2.diff(startTest2));
    let test2Seconds = test2duration.asSeconds();

    // Test 3
    let startTest3 = moment();
    for(let i = 0; i < 1000000; i++){
        replaceMultipleTimes(wordList);
    }
    let endTest3 = moment();
    let test3duration = moment.duration(endTest3.diff(startTest3));
    let test3Seconds = test3duration.asSeconds();
    
    console.log("test 1 time", test1Seconds);
    console.log("test 2 time", test2Seconds);
    console.log("test 3 time", test3Seconds);
})();

function sringTemplates(wordList){
    let template = `Sometimes ${wordList[0]} it ${wordList[1]} is ${wordList[2]} better ${wordList[3]} to ${wordList[4]} just ${wordList[5]} walk ${wordList[6]} away ${wordList[7]} from ${wordList[8]} things ${wordList[9]} and ${wordList[10]} go ${wordList[11]} back ${wordList[12]} to ${wordList[13]} them ${wordList[4]} later ${wordList[5]} when ${wordList[16]} you’re ${wordList[17]} in ${wordList[18]} a ${wordList[19]} better ${wordList[20]} frame ${wordList[21]} of ${wordList[22]} mind.`;
}

function singleQuotesWithStringBuildup(wordList){
    let template = 'Sometimes ' + wordList[0] + ' it ' + wordList[1] + ' is ' + wordList[2] + ' better ' + wordList[3] + ' to ' + wordList[4] + ' just ' + wordList[5] +  ' walk ' + wordList[6] + ' away ' + wordList[7] + ' from ' + wordList[8] + ' things '  + wordList[9] + ' and '  + wordList[10] + ' go ' + wordList[11] + ' back ' + wordList[12] + ' to ' + wordList[13] +  ' them ' + wordList[14] + ' later ' + wordList[15] + ' when ' + wordList[16] + ' you’re ' + wordList[17] + ' in ' + wordList[18] + ' a ' + wordList[19] + ' better ' + wordList[20] + ' frame ' + wordList[21] + ' of ' + wordList[22] + ' mind.';
}

function replaceMultipleTimes(wordList){
    // Could use: [str0], [str1], [str2] etc, however how to you increment without using '[str'+i+']' and skew the results?
    let template = 'Sometimes [str] it [str] is [str] better [str] to [str] just [str] walk [str] away [str] from [str] things [str] and [str] go [str] back [str] to [str] them [str] later [str] when [str] you’re [str] in [str] a [str] better [str] frame [str] of [str] mind.';
    for(let i = 0; i < 24; i++){
        // Only use replace here, as we want to replace the first one, and then replace the next one on the next loop with the next word.
        template = template.replace('[str]', wordList[i]);
    }
}

function buildWordList(){
    let arr = [];
    for(let i = 0; i < 24; i++){
        arr.push(chance.string({ length: 5 }));
    }
    return arr;
}