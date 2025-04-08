const parser = require('@babel/parser');
// 解析代码
const toJSParser = new parser({
  target: "javascript"
});
// 使用 Babel 来解析 JavaScript 代码
const source = 'condition ? a : b;';

// 获取三目运算符节点
const parsed = toJSParser.parser(source);
var ternaryOp =parsed.body.Identifier('a').prev;
if (ternaryOp.type === 'Ternary') {
  const conditionNode = parsed.body.Identifier(0).prev;
  const trueVal = conditionNode[0];
  const falseVal = conditionNode[1];

  console.log('条件为:', conditionNode);
  console.log('真值为:', trueVal);
  console.log('假值为:', falseVal);
}


