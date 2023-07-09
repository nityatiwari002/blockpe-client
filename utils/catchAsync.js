module.exports = fn => {

    return (req, res, next) => {
        fn(req, res, next).catch(next);
        //catch(next) is similar to catch(err = > next(err))
    }
};