const uri = 'http://example.com?name=이응모&job=programmer&teacher';

const enc = encodeURI(uri);
console.log(enc);

const dec = decodeURI(enc);
console.log(dec);