function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(
    require.context('../../images', false, /\.(png|jpe?g|gif|svg)$/)
);

export default images;