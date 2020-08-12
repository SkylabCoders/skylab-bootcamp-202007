import decodeFast from './../utils/simpleDecoder';
import TRANSFORMATION_MAP from '../utils/TRANSFORMATION_MAP';

describe('test set for decoder utility', ()=>{
    const { random } = Math;
    test('test most common string decode: &#039;', ()=>{
        const result = 'What\'s up?';
        const input = 'What&#039;s up?';
        let decoded = decodeFast(input);
        expect(decoded).toMatch(result);
    })
    test('test most common string decode: &quot;', ()=>{
        const result = '\"This is a quote\"';
        const input = '&quot;This is a quote&quot;?';
        let decoded = decodeFast(input);
        expect(decoded).toMatch(result);
    })
    test('test most common string decode: &lsquo; and &rsquo;', ()=>{
        const result = '‘Left and right quote marks’';
        const input = '&lsquo;Left and right quote marks&rsquo;';
        let decoded = decodeFast(input);
        expect(decoded).toMatch(result);
    })
    test('test most common string decode mixed: &quot; &lsquo; &rsquo; and &#039;', ()=>{
        const result = 'What\'s up? This is a \"mess up\" of different ‘quotes’.';
        const input = 'What&#039;s up? This is a &quot;mess up&quot; of different &lsquo;quotes&rsquo;.';
        let decoded = decodeFast(input);
        expect(decoded).toMatch(result);
    })
    test('test random crazy symbols to decaode: ', ()=>{
        const mockArray = Array.from(TRANSFORMATION_MAP.keys());
        const mockResults = Array.from(TRANSFORMATION_MAP.values());
        //let randomPosition = getRandomIntInclusive(0, mockArray.length);
        let randomPosition = Math.floor(random()*mockArray.length);
        const input = mockArray[randomPosition];
        const result = mockResults[randomPosition];
        let decoded = decodeFast(input);
        console.log('CRAZY TEST WITH ', input, decoded, result);
        expect(decoded).toMatch(result);
    })
})