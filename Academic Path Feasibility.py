from collections import deque

def can_finish(numCourses, prerequisites):
    adj = [[] for _ in range(numCourses)]
    indegree = [0] * numCourses
    
    for dest, src in prerequisites:
        adj[src].append(dest)
        indegree[dest] += 1
        
    queue = deque([i for i in range(numCourses) if indegree[i] == 0])
    visited_count = 0
    
    while queue:
        node = queue.popleft()
        visited_count += 1
        
        for neighbor in adj[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)
                
    return visited_count == numCourses


print(can_finish(2, [[1, 0]]))     
print(can_finish(2, [[1, 0], [0, 1]])) 
