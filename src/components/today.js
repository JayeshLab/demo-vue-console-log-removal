const today = function() {
    const dt = new Date();
    console.log(dt);
    return dt.toISOString();
}
export default today;