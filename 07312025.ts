// Simplify Unix file system path. (Stack)

function simplifyPath(path: string): string {
  const arr = path.split("/");
  const stack: string[] = [];

  for (const directory of arr) {
    // "." represents the current directory.
    if (directory === "" || directory === ".") {
      continue;
    }

    // ".." levels up the directory.
    if (directory === "..") {
      stack.pop();
      continue;
    }

    stack.push(directory);
  }

  return `/${stack.join("/")}`;
}

console.log(simplifyPath("/home/"), "/home"); // Trailing slash is removed.
console.log(simplifyPath("/home//foo/"), "/home/foo"); // Consecutive slashes are treated as one.
console.log(simplifyPath("/home/user/Documents/../Pictures"), "/home/user/Pictures"); // ".." levels up the directory.
console.log(simplifyPath("/../"), "/"); // Cannot level up the root directory.
console.log(simplifyPath("/home/user/Documents/./Pictures"), "/home/user/Documents/Pictures"); // "." represents the current directory.
console.log(simplifyPath("/.../a/../b/c/../d/./"), "/.../b/d"); // "..." is a valid directory name.
// https://leetcode.com/problems/simplify-path/

// path: string. 1 <= path.length <= 3000. Consists of letters, digits, ".", "/", or "_".
// Convert the Unix path into an absolute path, and return the result.
