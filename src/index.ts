/**
 * calcluate fabonacci series
 */

export function fabonacciSeries(num:number):string{
  var fibs = [];
    if (num > 0) {
        fibs.push(0);
        if (num > 1) {
            fibs.push(1);
            for (var i = 2; i < num; i++) {
                fibs.push(fibs[i - 2] + fibs[i - 1]);
            }
        }
        return fibs.toString();
    }
    else
        return "Not a possitive number";
}

