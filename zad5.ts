enum BallType {
    FOOTBALL = "Football",
    BASKETBALL = "Basketball",
    TENNIS = "Tennis",
  }
  
  type SportBall = {
    type: BallType;
    weight: number;
    color: string;
  };
  
  const myBall: SportBall = {
    type: BallType.FOOTBALL,
    weight: 450,
    color: "White and Black",
  };
  
  console.log(JSON.stringify(myBall));