'use strict'

function Calculator () {
    let result = null;

    function sum (nums) {
        result = nums[0] + nums[1];
        return result;
    }
    function subs (nums) {
        result = nums[0] - nums[1];
        return result;
    }
    function product (nums) {
        result = nums[0] * nums[1];
        return result;
    }
    function division (nums) {
        result = nums[0] / nums[1];
        return result;
    }
return { sum, subs, product, division };
}