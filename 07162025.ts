// Network delay time. (Graph) (Dijkstra’s algorithm)

function networkDelayTime(times: number[][], n: number, k: number): number {
  // Build adjacency list.
  const graph = new Map<number, [number, number][]>(); // u => [[v, w]]

  for (const [u, v, w] of times) {
    graph.set(u, (graph.get(u) || []).concat([[v, w]]));
  }

  // Create min heap.
  const minHeap = new MinPriorityQueue((entry) => entry[0]); // Accumulated time, node.
  minHeap.enqueue([0, k]);

  const seen = new Set<number>();
  let minTime = 0;

  while (!minHeap.isEmpty()) {
    const [time, node] = minHeap.dequeue() as number[];

    if (seen.has(node)) {
      continue;
    }

    seen.add(node);
    minTime = time;

    for (const [nextNode, nextTime] of graph.get(node) || []) {
      if (!seen.has(nextNode)) {
        minHeap.enqueue([time + nextTime, nextNode]);
      }
    }
  }

  return seen.size === n ? minTime : -1;
}

console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2), 2);
console.log(networkDelayTime([[1, 2, 1]], 2, 1), 1);
console.log(networkDelayTime([[1, 2, 1]], 2, 2), -1);
// https://leetcode.com/problems/network-delay-time/

// times: number[][]. 1 <= times.length <= 6000. times[i] = [u, v, w].
// - u: number. 1 <= u <= n. Source node.
// - v: number. 1 <= v <= n. Target node.
// - w: number. 0 <= w <= 100. Time to travel from source to node.
// n: number. 1 <= n <= 100. Number of nodes.
// k: number. 1 <= k <= 100. Node to start signal.
// Return the minimum time it takes for all nodes to receive the signal, or -1 if it's impossible.
