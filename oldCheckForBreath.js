this.tempChain = [];
    this.checkForBreath = function(user,x,y){
        var moveLocation = x + "," + y;
        
        if (y+1 <= game.size-1 && this.tempBoard[y+1][x] === "0"){
            this.tempChain = [];
            return "valid";
        }
        if(y-1 >= 0 && this.tempBoard[y-1][x] === "0"){
            this.tempChain = [];
            return "valid";
        }
        if(x+1 <= game.size-1 && this.tempBoard[y][x+1] === "0"){
            this.tempChain = [];
            return "valid";
        }
        if(x-1 >=0 && this.tempBoard[y][x-1] === "0"){
            this.tempChain = [];
            return "valid";
        } else {
            //place current stone coordinates into tempChain
            this.tempChain.push(moveLocation);
            if(y+1 <= game.size -1 && this.tempBoard[y+1][x] === user && this.tempChain.indexOf(x + "," + (y+1)) === -1 ){
                return this.checkForBreath(user, x, y+1);
            }
            if(y-1 >=0 && this.tempBoard[y-1][x] === user && this.tempChain.indexOf(x + "," + (y-1)) === -1 ){
                return this.checkForBreath(user, x, y-1)
            }
            if(x+1 <= game.size-1 && this.tempBoard[y][x+1] === user && this.tempChain.indexOf((x+1) + "," + y) === -1){
                return this.checkForBreath(user, x+1, y);
            }
            if(x-1 >=0 && this.tempBoard[y][x-1] === user && this.tempChain.indexOf((x-1) + "," + y) === -1 ){
                return this.checkForBreath(user, x-1, y);
            }
            else {
                this.tempChain = [];
                return "invalid";
            }
        }
    };