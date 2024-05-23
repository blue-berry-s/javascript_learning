/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    function toBe (check) {
        if (val === check){
            return true;
        }
        else{
            throw new Error("Not Equal");
        }
    }
    

    function notToBe (check) {
        if (val !== check){
            return true;
        }
        else{
            throw new Error("Equal");
        }
    }

    return {
        toBe,
        notToBe
    }
    
};


 expect(5).toBe(5); 
 expect(5).notToBe(5); 