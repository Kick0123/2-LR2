var BallType;
(function (BallType) {
    BallType["FOOTBALL"] = "Football";
    BallType["BASKETBALL"] = "Basketball";
    BallType["TENNIS"] = "Tennis";
})(BallType || (BallType = {}));
var myBall = {
    type: BallType.FOOTBALL,
    weight: 450,
    color: "White and Black",
};
console.log(JSON.stringify(myBall));
