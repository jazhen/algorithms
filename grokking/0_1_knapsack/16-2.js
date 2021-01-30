function knapsack(profits, weight, capacity) {
  let max = 0;

  function solve(profits, weight, capacity, cost, limit, start) {
    max = Math.max(max, cost);

    for (let i = start; i < profits.length; i++) {
      if (limit + weight[i] > capacity) break;

      cost += profits[i];
      limit += weight[i]

      solve(profits, weight, capacity, cost, limit, i + 1);

      cost -= profits[i];
      limit -= weight[i]
    }
  }

  solve(profits, weight, capacity, 0, 0, 0);
  return max;
}

console.log(knapsack([1,6,10,16], [1,2,3,5], 7)); // 22
console.log(knapsack([1,6,10,16], [1,2,3,5], 6)); // 17
