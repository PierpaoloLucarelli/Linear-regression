# Linear-regression
A visualisation of linear regression using a statistical approach.

![linear regression](https://i.imgur.com/l2yUE2G.png "p5 visualisation")

How to calculate linear regression

We want to find the line that best fits the data. We know that a line is given by y = a + bx
So we want to find the values a and b that give the regression line.

This is how we can calculate this values.

Lets start with b (the slope) -> we can calculate this value using the formula b = r * (sY / sX) Where r = Pearson's correlation coefficient, sY = Y standard deviation, sX = X standard deviation

Once we have the slope we can calculate a (y intercept) using the formula -> a = meanY - b * meanX
This gives us the slope and y-intercept of the regression line. We can now plot the line and see that it fits the data.
 
To see results just download the repo and open index.html in your browser :)
