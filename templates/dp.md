##### Given a target find minimum (maximum) cost / path / sum to reach the target.

Choose minimum (maximum) path among all possible paths before the current state, then add value for the current state.

routes[i] = min(routes[i-1], routes[i-2], ... , routes[i-k]) + cost[i]

Generate optimal solutions for all values in the target and return the value for the target.

```js
for (let i = 1; i <= target; i)++ {
  for (let j = 0; j < ways.size(); j++) {
    if (ways[j] <= i) {
      dp[i] = min(dp[i], dp[i - ways[j]] + cost / path / sum);
    }
  }
}

return dp[target];
```

#### Given a target find a number of distinct ways to reach the target.

Sum all possible ways to reach the current state.

routes[i] = routes[i-1] + routes[i-2], ... , + routes[i-k]

Generate sum for all values in the target and return the value for the target.

```js
for (let i = 1; i <= target; i++) {
   for (let j = 0; j < ways.size(); j++) {
       if (ways[j] <= i) {
           dp[i] += dp[i - ways[j]];
       }
   }
}

return dp[target];
```
#### Given a set of values find an answer with an option to choose or ignore the current value.

If you decide to choose the current value use the previous result where the value was ignored; vice-versa, if you decide to ignore the current value use previous result where value was used.

```js
// i - indexing a set of values
// j - options to ignore j values

for (let i = 1; i < n; i++) {
   for (let j = 1; j <= k; j++) {
       dp[i][j] = Math.max({dp[i][j], dp[i-1][j] + arr[i], dp[i-1][j-1]});
       dp[i][j-1] = Math.max({dp[i][j-1], dp[i-1][j-1] + arr[i], arr[i]});
   }
}
```
