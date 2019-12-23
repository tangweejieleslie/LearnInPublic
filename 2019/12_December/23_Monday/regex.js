var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

var url = `http://www.ora.com:80/goodparts?q#fragment`;


var result = parse_url.exec(url);
var names = ['url', 'scheme', 'slash', 'host', 'port',
 'path', 'query', 'hash'];
var blanks = ' ';
var i;
for (i = 0; i < names.length; i += 1) {
    // console.log(names[i], ":" ,result[i]);
}


var string_data = "The quick brown fox jumps over the lazy dog 123 1";

var regex = /1/;

var results = regex.exec(string_data);

// console.log(results);
// console.log(regex.test(string_data));


var digit_regex = /\D/;

// console.log(digit_regex.test("No digits here."));
// console.log(digit_regex.test("Some digits here. 1"));
// console.log(digit_regex.test("419843251"));


var regex_array =  [];
regex_array[0] = /\d/;
regex_array[1] = /\D/;
regex_array[2] = /\w/;
regex_array[3] = /\W/;
regex_array[4] = /\s/;
regex_array[5] = /\S/;

var i = 0;

for(i=0; i < regex_array.length; i++){
    console.log("regex pattern: ", regex_array[i]);
    console.log("String Source 1, Results:",regex_array[i].test("A normal sentence without digits."));
    console.log("String Source 2, Results:",regex_array[i].test("A normal sentence with digits: 1 2 3 4 5."));
    console.log("String Source 3, Results:",regex_array[i].test("15451"));
    console.log("\n");
}
