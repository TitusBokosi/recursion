# recursion

A look at recursion as one of the computer scince basics. Covers recursion examples which are important algorithims in the filed of cs.
this include sort merge and fibonacci series.

# fibonacci

A sequence in which the next element is the sum of its previous two elements. This problem can be tackled with loops
but recursion works better when dealing with this problem and simplifies it.

# sort-merge

An algorithm for sorting items. Maybe the most convinient one if you would like to say so.
sort-merge uses the following algorithm:

        merge(){
            sort the left side;
            sort the right side;
            merge the sides;
        }

        if ( only one item is remaining) // base case since an array array of a single alement is considered to be sorted already
        {
            quit
        }
        else{
            merge();
        }
