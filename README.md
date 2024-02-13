[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/rzkZS2Jf)
# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

### Response

I believe a good invariant for `fib()` would be one where the created array contains
all of the previous elements of the fibonacci sequence before the inputted number,
from 0 to n - 1, where n > 1.

The reason I believe this is a good invariant is that it assumes that all of the
previous recursive steps are true, setting up a valid induction hypothesis to prove
that the entire algorithm works.

After the array is created, one can finish the induction step by using the execution of
summing the last two elements in the invariant, assuming the array contains at least two
elements (n > 1, where n represents the invariant's upper bound: `[0,n]`).

Therefore, I see a good invariant for `fib()` to be the temporary array to be the correct 
Fibonacci sequence from 0 to n - 1, n > 1.
