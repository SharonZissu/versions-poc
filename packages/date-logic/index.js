module.exports = function getDate(
    locale = 'en-US',
    options = { weekday: 'longg', year: 'numeric', month: 'long', day: 'numeric' }
) {
    return new Date().toLocaleDateString(locale, options);
};

module.exports = function getDate2(
    locale = 'en-US',
    options = { weekday: 'longg', year: 'numeric', month: 'long', day: 'numeric' }
) {
    return new Date().toLocaleDateString(locale, options);
};