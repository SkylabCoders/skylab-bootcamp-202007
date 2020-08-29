import TRANSFORMATION_MAP from './TRANSFORMATION_MAP';

export default function simpleDecoder(string){
    let result = string.replace(/&#039;/g, '\'')
        .replace(/&quot;/g, '\"')
        .replace(/&lsquo;/g, '‘')
        .replace(/&rsquo;/g, '’');

    if ((/&/g).test(result)){
        result = runDecodeMap(result);
    }

    function runDecodeMap(str){
        let match = '&' + str.split('&')[1].split(';')[0] + ';';
        let unicodeSeq = TRANSFORMATION_MAP.get(match);
        str = str.replace(match, unicodeSeq);
        return str;
    }

    return result;
}