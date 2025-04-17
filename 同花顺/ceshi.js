function runVM(bytecode) {
    //首先进行初始化操作
    const stack = [];
    const labels = {};
    let ip = 0;
    let callStack = [];

    // 第一次扫描：记录所有 LABEL 的位置
    for (let i = 0; i < bytecode.length; i++) {
      const [op, arg] = bytecode[i];
      if (op === "LABEL") {
        labels[arg] = i;
      }
    }

    // 当前帧：函数的局部变量作用域
    let currentFrame = {
      vars: {},
      returnValue: undefined,
    };

    while (ip < bytecode.length) {
      const [op, ...args] = bytecode[ip];

      switch (op) {
        case "LABEL":
          ip++;
          break;
      //执行跳转操作
        case "JUMP": {
          const label = args[0];
          if (!(label in labels)) {
            throw new Error(`Label ${label} not found`);
          }
          ip = labels[label];
          break;
        }

        case "PUSH":
          stack.push(args[0]);
          ip++;
          break;

        case "LOAD_VAR":
          stack.push(currentFrame.vars[args[0]]);
          ip++;
          break;

        case "STORE_VAR":
          currentFrame.vars[args[0]] = stack.pop();
          ip++;
          break;

        case "ADD": {
          const b = stack.pop();
          const a = stack.pop();
          stack.push(a + b);
          ip++;
          break;
        }

        case "CALL": {
          const funcName = args[0];
          const funcLabel = labels[funcName];
          if (funcLabel === undefined) {
            throw new Error(`Function ${funcName} not found`);
          }

          const paramNames = ["a", "b"]; // 简化，假设都是两个参数
          const newFrame = {
            vars: {},
            returnValue: undefined,
          };
          for (let i = paramNames.length - 1; i >= 0; i--) {
            newFrame.vars[paramNames[i]] = stack.pop();
          }

          // 保存当前上下文
          callStack.push({ ip: ip + 1, frame: currentFrame });
          currentFrame = newFrame;
          ip = funcLabel + 1;
          break;
        }

        case "RET": {
          const returnValue = stack.pop();
          const prev = callStack.pop();
          currentFrame = prev.frame;
          ip = prev.ip;
          stack.push(returnValue);
          break;
        }

        case "CALL_BUILTIN": {
          const fnName = args[0];
          if (fnName === "console.log") {
            const val = stack.pop();
            console.log(val);
          }
          ip++;
          break;
        }

        default:
          throw new Error(`Unknown opcode: ${op}`);
      }
    }
  }
const bytecode = [
    ["JUMP", "main"],          // 跳过函数定义

    ["LABEL", "add"],          // 函数体（不会立即执行）
    ["LOAD_VAR", "a"],
    ["LOAD_VAR", "b"],
    ["ADD"],
    ["RET"],

    ["LABEL", "main"],         // 主程序入口
    ["PUSH", 2],
    ["PUSH", 3],
    ["CALL", "add"],
    ["CALL_BUILTIN", "console.log"]
  ];

runVM(bytecode); // 输出：5const bytecode = [
