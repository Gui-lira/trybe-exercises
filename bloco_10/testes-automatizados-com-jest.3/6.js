const fecthApi = async () => {
    const returned = await fetch('https://dog.ceo/api/breeds/image/random');
    return returned;
}

module.exports = { fecthApi };