const Club = require('./model');

// @desc Get all Clubs data
// route GET /api/v1/clubs
// @acces public

exports.getClubs = async (req,res,next) => {
    const clubsdata = await Club.find();
    res.status(200).json({
        success: true,
        count: clubsdata.length,
        data: clubsdata
    });
};

// @desc Get a single Clubs data
// route GET /api/v1/clubs/:id
// @acces public

exports.getClub = async (req,res,next) => {
    const clubsdata = await Club.findById(req.params.id);
    if(!clubsdata) {
        return res.status(400).json({ Success: false})
    }

    res.status(200).json({
        success: true,
        data: clubsdata
    });
};

// @desc Create a Club
// route POST /api/v1/clubs/
// @acces public

exports.createClub = async (req,res,next) => {
    const club = await Club.create(req.body)
    res.status(200).json({
        success: true,
        data: club
    });
};

// @desc Update a Club
// route POST /api/v1/clubs/:id
// @acces public

exports.updateClub = async (req,res,next) => {
    const club = await Club.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    if(!club) {
        return res.status(400).json({ Success: false})
    }
    res.status(200).json({
        success: true,
        data: club
    });
};