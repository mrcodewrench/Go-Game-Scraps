// to be removed if replaced in Chains Class!!!!
    this.killChain = function(user,x,y){
        this.removeStone(x,y);
        
        if(user === this.black)
            document.getElementById("whiteHasCaptured").innerHTML = ++game.whiteHasCaptured;
        else
            document.getElementById("blackHasCaptured").innerHTML = ++game.blackHasCaptured;
        
        if(y+1 <= game.size -1 && this.tempBoard[y+1][x] === user){
            this.killChain(user,x,y+1);
        }
        if (y-1 >=0 && this.tempBoard[y-1][x] === user){
            this.killChain(user, x, y-1);
        }
        if(x+1 <= game.size-1 && this.tempBoard[y][x+1] === user){
            this.killChain(user,x+1,y);
        }
        if (x-1 >=0 && this.tempBoard[y][x-1] === user){
            this.killChain(user,x-1,y);
        }
    };