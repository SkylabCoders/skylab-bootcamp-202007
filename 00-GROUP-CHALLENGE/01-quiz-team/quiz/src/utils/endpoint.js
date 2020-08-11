const TYPE = ['multiple', 'boolean'];
const DIFFICULTY = ['easy', 'medium', 'hard'];
const CATEGORY = [];
for (let i = 9; i < 33; i++){
    CATEGORY.push(i);
}
const ENCODING = ['url3986', 'base64'];

const PARAMETERS = {
    type: new Set(TYPE),
    difficulty: new Set(DIFFICULTY),
    category: new Set(CATEGORY),
    encoding: new Set(ENCODING)
};

export default function getEndpoint(category, difficulty, type, encode, amount){
    let query = [];
    query.push(`amount=${amount}`);
    if (category !== 'all' && PARAMETERS.category.has(category)){ query.push(`category=${category}`)}
    if (difficulty !== 'all' && PARAMETERS.difficulty.has(difficulty)){ query.push(`difficulty=${difficulty}`)}
    if (type !== 'all' && PARAMETERS.type.has(type)){ query.push(`type=${type}`)}
    if (encode !== 'default' && PARAMETERS.encoding.has(encode)){ query.push(`encode=${encode}`)}
    return query.join('&');
}